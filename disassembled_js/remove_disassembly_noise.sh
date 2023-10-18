#!/bin/bash
# Remove dynamic information from diassembly .disass.js files, to facilitate
# checksums and diffs across versions.

# - Replace exact (dynamic) addresses like 0x1234567890 with 'ADDR'
# - Replace property pointer values such as "const data descriptor, p: 6" with PTR
sed 's/0x[0-9a-f]\{8,16\}/ADDR/g' | sed 's/descriptor, p: [0-9]\+/descriptor, p: PTR/g'
