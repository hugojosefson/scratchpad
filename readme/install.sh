#!/usr/bin/env bash
# add as dependency to your project
deno add jsr:@hugojosefson/scratchpad

# ...or...

# create and enter a directory for the script
mkdir -p "scratchpad"
cd       "scratchpad"

# download+extract the script, into current directory
curl -fsSL "https://github.com/hugojosefson/scratchpad/tarball/main" \
  | tar -xzv --strip-components=1
