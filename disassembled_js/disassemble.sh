#!/bin/bash
# Assumes:
# - normal 'node' is available
# - https://github.com/LockBlock-dev/pkg-unpacker is checked-out somewhere
# - a custom nodejs binary (with a version that matches the challenge) with
#   patches applied to:
#   1) match the right https://github.com/vercel/pkg-fetch nodejs patch to what
#      was packaged in blitz-challenge-linux
#   2) local patch to add auto-disassembly & printiong of loaded Script cached
#      data, when available

# Run a packaged vercel binary in interpreter mode, instead of running the
# packaged nodejs script.
# Usage: vercel_pkg_run_node pkged_node_path ...
function vercel_pkg_run_node() {
    pkged_node_path=$1
    shift
    # See https://github.com/vercel/pkg-fetch/blob/main/patches/node.v18.15.0.cpp.patch#L494-496
    PKG_EXECPATH=PKG_INVOKE_NODEJS "${pkged_node_path?}" "$@"
}

# Disassemble files in the give base path
# Usage: disasemble_js_files base_path
function disassemble_js_files() {
    basepath=$1
    for file in "${basepath?}/"*.js; do
        output="${file%.js}.disass.js"
        "${patched_node}" ./disassemble_unpacked.js "$file" > "${output}"
    done
}

if [ "$#" -ne 3 ]; then
    echo 'Usage: ./disassemble.sh /path/to/pkg-unpacker /path/to/patched/nodejs/bin/node /path/to/blitz-challenge-linux'
    exit 1
fi
unpacker_path=$1
patched_node=$2
challenge_bin=$3

echo 'Checking version of patched node, vs. challenge binary...'
patched_node_ver=$(vercel_pkg_run_node "${patched_node?}" -v)
echo "Patched nodejs version: $patched_node_ver"
challenge_node_ver=$(vercel_pkg_run_node "${challenge_bin?}" -v)
echo "Challenge nodejs version: $challenge_node_ver"

if [ "$patched_node_ver" = "$challenge_node_ver" ]; then
    echo 'Versions match!'
else
    echo 'Mismatched node versions. Build a new patched nodejs.'
    exit 1
fi

challenge_md5=$(md5sum "${challenge_bin?}" | awk '{print $1}')
echo
echo "Challenge MD5: $challenge_md5"
echo "Creating directory..."
mkdir -p "${challenge_md5?}"

echo
echo "Unpacking embedded pkg files using pkg-unpacker to /tmp/${challenge_md5}..."
mkdir -p "/tmp/${challenge_md5}"
node "${unpacker_path?}" -i "${challenge_bin?}" -o "/tmp/${challenge_md5}"
echo "Files unpacked."

echo
echo "Copying files of interest to ./${challenge_md5}"
mkdir -p "./${challenge_md5}/challenge"
cp "/tmp/${challenge_md5}/snapshot/blitz-2024/challenge/package.json" "./${challenge_md5}/challenge/"
cp "/tmp/${challenge_md5}/snapshot/blitz-2024/challenge/dist/"*.js "./${challenge_md5}/challenge/"
mkdir -p "./${challenge_md5}/challenge-launcher"
cp "/tmp/${challenge_md5}/snapshot/blitz-2024/challenge-launcher/dist/"*.js "./${challenge_md5}/challenge-launcher/"
echo "Files copied."

echo
echo "Disassembling unpacked files..."
disassemble_js_files "./${challenge_md5}/challenge/"
disassemble_js_files "./${challenge_md5}/challenge-launcher/"
echo "Disassembly done."
