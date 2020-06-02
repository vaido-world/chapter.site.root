#!/bin/bash

docker run --rm --name "tzm-jekyll-builder" --volume="$PWD:/srv/jekyll" -p "4000:4000" --volume="${HOME}/.bundle-cache/tzm.community.jekyll:/usr/local/bundle" -it jekyll/jekyll:$JEKYLL_VERSION $*
