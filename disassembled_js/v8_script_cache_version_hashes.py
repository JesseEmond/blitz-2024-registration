def hash_value_unsigned(v: int) -> int:
    """https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/src/main/java/v8_bytecode/V8_VersionDetector.java#L51"""
    mask = 0xFFFFFFFF
    v = ((v << 15) - v - 1) & mask
    v = (v ^ (v >> 12)) & mask
    v = (v + (v << 2)) & mask
    v = (v ^ (v >> 4)) & mask
    v = (v * 2057) & mask
    v = (v ^ (v >> 16)) & mask
    return v

def hash_combine_32(seed: int, value: int) -> int:
    """https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/src/main/java/v8_bytecode/V8_VersionDetector.java#L61"""
    mask = 0xFFFFFFFF
    value = (value * 0xCC9E2D51) & mask
    value = ((value >> 15) | (value << (32-15))) & mask
    value = (value * 0x1b873593) & mask
    seed ^= value
    seed = ((seed >> 13) | (seed << (32-13))) & mask
    seed = (seed * 5 + 0xE6546B64) & mask
    return seed

def hash_combine_64(seed: int, value: int) -> int:
    """https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/src/main/java/v8_bytecode/V8_VersionDetector.java#L71"""
    mask = 0xFFFFFFFFFFFFFFFF
    m = 0xC6A4A7935BD1E995
    value = (value * m) & mask
    value = (value ^ (value >> 47)) & mask
    value = (value * m) & mask
    seed = (seed ^ value) & mask
    seed = (seed * m) & mask
    return seed

def version_hash_32(major: int, minor: int, build: int, patch: int) -> int:
    """https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/src/main/java/v8_bytecode/V8_VersionDetector.java#L81"""
    seed = 0
    seed = hash_combine_32(seed, hash_value_unsigned(patch))
    seed = hash_combine_32(seed, hash_value_unsigned(build))
    seed = hash_combine_32(seed, hash_value_unsigned(minor))
    seed = hash_combine_32(seed, hash_value_unsigned(major))
    return seed

def version_hash_64(major: int, minor: int, build: int, patch: int) -> int:
    """https://github.com/PositiveTechnologies/ghidra_nodejs/blob/main/src/main/java/v8_bytecode/V8_VersionDetector.java#L94"""
    seed = 0
    seed = hash_combine_64(seed, hash_value_unsigned(patch))
    seed = hash_combine_64(seed, hash_value_unsigned(build))
    seed = hash_combine_64(seed, hash_value_unsigned(minor))
    seed = hash_combine_64(seed, hash_value_unsigned(major))
    return seed & 0xFFFFFFFF

version = input('V8 version string?\n> ')
major, minor, build, patch = (int(part) for part in version.split('.'))
print(f'32-bit: {version_hash_32(major, minor, build, patch):8x}')
print(f'64-bit: {version_hash_64(major, minor, build, patch):8x}')

