#!/bin/sh
rm bot.zip
zip -r bot.zip bot \
    -x 'bot/__pycache__/**' -x '*.swp' -x 'bot/.pytype/**' \
    -x 'bot/target/debug/**' -x 'bot/target/release/**' \
    -x 'bot/target/.rustc_info.json' \
    -x 'bot/target/criterion/**' \
    -x 'bot/target/tmp/**' \
    -x 'bot/perf.data*' -x 'bot/flamegraph.svg'
