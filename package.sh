#!/bin/sh
zip -r bot.zip bot -x 'bot/__pycache__/**' -x '*.swp' -x 'bot/.pytype/**' -x 'bot/target/debug/**' -x 'bot/target/.rustc_info.json'
