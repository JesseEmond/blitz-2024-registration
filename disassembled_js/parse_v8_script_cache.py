import dataclasses
import enum
import sys
from typing import Union

def PtrSizeAlign(p: int) -> int:
    sys_ptr_size_lg2 = 3  # 64 bits
    ptr_alignment = (1 << sys_ptr_size_lg2)
    ptr_alignment_mask = ptr_alignment - 1
    return (p + ptr_alignment_mask) & ~ptr_alignment_mask

UNALIGNED_HEADER_SIZE = 4 * 6  # 6 fields, 32-bits each
HEADER_SIZE = PtrSizeAlign(UNALIGNED_HEADER_SIZE)
# ref: https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/common/globals.h#L326
# (assuming V8_COMPRESS_POINTERS is not set)
TAGGED_SIZE = 8

@dataclasses.dataclass
class Header:
    magic: int
    version_hash: int
    source_hash: int
    flag_hash: int
    payload_len: int
    checksum: int
    padding: bytes

# Note: this is serialization bytecode, not v8 ignition bytecode
class Bytecode(enum.IntEnum):
    NEW_OBJECT_OLD_SPACE = 0x01
    BACKREF = 0x04
    ROOT_ARRAY = 0x07
    ATTACHED_REFERENCE = 0x08
    NOP = 0x0b
    SYNCHRONIZE = 0x0c
    WEAK_PREFIX = 0x18

    REGISTER_PENDING_FORWARD_REF = 0x1a

    ROOT_ARRAY_CONSTANT_START = 0x40
    ROOT_ARRAY_CONSTANT_LAST = 0x5f

    FIXED_RAW_DATA_START = 0x60
    FIXED_RAW_DATA_LAST = 0x7f

    FIXED_REPEAT_START = 0x80
    FIXED_REPEAT_LAST = 0x8f

    HOT_OBJECT_START = 0x90
    HOT_OBJECT_LAST = 0x97


def IsRootArrayConstantBytecode(bytecode: int) -> bool:
    return int(Bytecode.ROOT_ARRAY_CONSTANT_START) <= bytecode <= int(Bytecode.ROOT_ARRAY_CONSTANT_LAST)

def IsFixedRawDataBytecode(bytecode: int) -> bool:
    return int(Bytecode.FIXED_RAW_DATA_START) <= bytecode <= int(Bytecode.FIXED_RAW_DATA_LAST)

def IsFixedRepeatBytecode(bytecode: int) -> bool:
    return int(Bytecode.FIXED_REPEAT_START) <= bytecode <= int(Bytecode.FIXED_REPEAT_LAST)

def IsHotObject(bytecode: int) -> bool:
    return int(Bytecode.HOT_OBJECT_START) <= bytecode <= int(Bytecode.HOT_OBJECT_LAST)

@dataclasses.dataclass
class RootArrayConstantBytecode:
    root_array_index: int
    def __init__(self, bytecode: int):
        self.root_array_index = bytecode - int(Bytecode.ROOT_ARRAY_CONSTANT_START)

@dataclasses.dataclass
class FixedRawDataBytecode:
    raw_data_index: int
    def __init__(self, bytecode: int):
        self.raw_data_index = bytecode - int(Bytecode.FIXED_RAW_DATA_START)

@dataclasses.dataclass
class FixedRepeatBytecode:
    repeat_index: int
    def __init__(self, bytecode: int):
        self.repeat_index = bytecode - int(Bytecode.FIXED_REPEAT_START)

@dataclasses.dataclass
class HotObjectBytecode:
    hot_object_index: int
    def __init__(self, bytecode: int):
        self.hot_object_index = bytecode - int(Bytecode.HOT_OBJECT_START)

BytecodeType = Union[Bytecode, RootArrayConstantBytecode, FixedRawDataBytecode,
                     FixedRepeatBytecode, HotObjectBytecode]

def ToBytecode(bytecode: int) -> BytecodeType:
    if IsRootArrayConstantBytecode(bytecode):
        return RootArrayConstantBytecode(bytecode)
    elif IsFixedRawDataBytecode(bytecode):
        return FixedRawDataBytecode(bytecode)
    elif IsHotObject(bytecode):
        return HotObjectBytecode(bytecode)
    elif IsFixedRepeatBytecode(bytecode):
        return FixedRepeatBytecode(bytecode)
    else:
        return Bytecode(bytecode)


class DataBuffer:
    data: bytes
    seen: int

    def __init__(self, data: bytes) -> None:
        self.data = data
        self.seen = 0

    def Read(self, n_bytes: int) -> bytes:
        assert len(self.data) >= n_bytes, self.data
        self.seen += n_bytes
        out, self.data = self.data[:n_bytes], self.data[n_bytes:]
        return out

    def ReadByte(self) -> int:
        return self.Read(1)[0]

    def Peek(self) -> int:
        return self.data[0]

    def ReadU32(self) -> int:
        return int.from_bytes(self.Read(4), 'little')

    def Advance(self, n_bytes: int) -> None:
        self.Read(n_bytes)  # Consume bytes, ignore result

    def ReadInt(self) -> int:
        # ref: https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/snapshot/snapshot-source-sink.h#L84
        assert len(self.data) >= 4, self.data
        answer = self.data[0]
        answer |= self.data[1] << 8
        answer |= self.data[2] << 16
        answer |= self.data[3] << 24
        bytes_ = (answer & 3) + 1
        self.Advance(bytes_)  
        mask = 0xFFFFFFFF
        mask >>= (32 - (bytes_ << 3))
        answer &= mask
        answer >>= 2
        return answer

def ReadHeader(buffer: DataBuffer) -> Header:
    magic = buffer.ReadU32()
    version_hash = buffer.ReadU32()
    source_hash = buffer.ReadU32()
    flag_hash = buffer.ReadU32()
    payload_len = buffer.ReadU32()
    checksum = buffer.ReadU32()
    assert buffer.seen == UNALIGNED_HEADER_SIZE
    assert HEADER_SIZE + payload_len == len(buffer.data) + buffer.seen
    padding_len = HEADER_SIZE - buffer.seen
    padding = buffer.Read(padding_len)
    assert padding == b'\x00' * len(padding), padding
    assert len(buffer.data) == payload_len, (buffer.data, payload_len)
    return Header(magic, version_hash, source_hash, flag_hash, payload_len,
                  checksum, padding)

def PrintHeader(header: Header) -> None:
    print(f'Header size (unaligned): {UNALIGNED_HEADER_SIZE}')
    print(f'Header size (aligned): {HEADER_SIZE}')
    print(f'Magic: {header.magic:08x}')
    print(f'Version hash: {header.version_hash:08x}')
    print(f'Source hash: {header.source_hash:08x}')
    print(f'Flag hash: {header.flag_hash:08x}')
    print(f'Payload len: {header.payload_len}')
    print(f'checksum: {header.checksum:08x}')
    print(f'Heading padding: {header.padding}')

class PayloadParser:
    def __init__(self):
        self.backrefs = []
        self.attached_objects = ['']

    def ReadPayload(self, buffer: DataBuffer):
        # ref: https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/snapshot/object-deserializer.cc#L43
        root = self.ReadObject(buffer)
        self.ReadDeferredObjects(buffer)
        if buffer.data:
            padding = bytes([int(Bytecode.NOP)] * len(buffer.data))
            assert buffer.data == padding, buffer.data

    def ReadDeferredObjects(self, buffer: DataBuffer):
        while True:
            code = buffer.ReadByte()
            print(f'Deferred bytecode: {code:02x}')
            if code == Bytecode.SYNCHRONIZE:
                break
            assert False, hex(code)

    def ReadSingleBytecodeData(self, buffer: DataBuffer, bytecode: BytecodeType) -> int:
        # ref: https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/snapshot/deserializer.cc#L927
        print(bytecode)
        if bytecode == Bytecode.NEW_OBJECT_OLD_SPACE:
            # TODO: remember old space..?
            self.ReadObjectInSpace(buffer)
            return 1
        elif bytecode == Bytecode.ROOT_ARRAY:
            id_ = buffer.ReadInt()
            print(f'Root idx: {id_}')
            return 1
        elif bytecode == Bytecode.ATTACHED_REFERENCE:
            idx = buffer.ReadInt()
            print(f'Attached ref: {self.attached_objects[idx]}')
            return 1
        elif bytecode == Bytecode.BACKREF:
            idx = buffer.ReadInt()
            print(f'Backref to {idx}... ', end='', flush=True)
            print(f'{self.backrefs[idx]}')
            return 1
        elif bytecode == Bytecode.WEAK_PREFIX:
            # TODO nothing to do
            return 0
        elif isinstance(bytecode, FixedRawDataBytecode):
            size_in_tagged = bytecode.raw_data_index + 1
            size_in_slots = size_in_tagged
            raw_data = buffer.Read(size_in_slots * 8)
            print(f'Raw data: {raw_data}')
            return size_in_slots
        elif isinstance(bytecode, FixedRepeatBytecode):
            repeats = bytecode.repeat_index + 2
            print(f'Repeat the next one x{repeats}')
            self.ReadObject(buffer)
            return repeats
        elif isinstance(bytecode, RootArrayConstantBytecode):
            pass # TODO: anything to do?
            return 1
        elif isinstance(bytecode, HotObjectBytecode):
            # TODO anything to do?
            return 1
        else:
            raise NotImplementedError(bytecode)

    def ReadObject(self, buffer: DataBuffer):
        # ref: https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/snapshot/deserializer.cc#L601
        self.ReadSingleBytecodeData(buffer, ToBytecode(buffer.ReadByte()))

    def ReadObjectInSpace(self, buffer: DataBuffer):
        # ref: https://github.com/nodejs/node/blob/v18.5.0/deps/v8/src/snapshot/deserializer.cc#L624
        size_in_tagged = buffer.ReadInt()
        # size_in_bytes = size_in_tagged * TAGGED_SIZE
        assert ToBytecode(buffer.Peek()) != Bytecode.REGISTER_PENDING_FORWARD_REF
        self.ReadObject(buffer)  # map = ...
        print(f'{size_in_tagged} objects to read')
        self.backrefs.append('object')
        self.ReadData(buffer, 1, size_in_tagged)
        print('TODO: postprocess')

    def ReadData(self, buffer: DataBuffer, start_slot: int, end_slot: int):
        current = start_slot
        while current < end_slot:
            print(f'Slot index: {current}')
            bytecode = ToBytecode(buffer.ReadByte())
            current += self.ReadSingleBytecodeData(buffer, bytecode)

def main():
    assert len(sys.argv) == 2, 'Usage: python3 parse_v8_script_cache.py file.js'
    input_file = sys.argv[1]
    with open(input_file, 'rb') as f:
        data = f.read()
    buffer = DataBuffer(data)
    header = ReadHeader(buffer)
    PrintHeader(header)
    # buffer now has 'payload'
    payload_parser = PayloadParser()
    payload = payload_parser.ReadPayload(buffer)


if __name__ == '__main__':
    main()
