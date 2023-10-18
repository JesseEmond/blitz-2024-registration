#!/bin/bash
# Helper script to print the MD5 of each disassembled file in a given unpacked
# snapshot, skipping the non-'.disass.js' files.
# Files are 'de-noised' with ./remove_disassembly_noise.sh to reduce false
# positives.
# Useful to find diffs between versions.

if [ "$#" -ne 1 ]; then
    echo 'Usage: ./checksum_disassembled_files.sh ./md5sum_of_server_version'
    exit 1
fi

basepath=$1

while IFS='' read -r -d '' filename; do
    echo -n -e "${filename?}\t"
    cat "${filename?}" | ./remove_disassembly_noise.sh | md5sum
done < <(find "${basepath?}" -type f -name '*.disass.js' -print0)
