#!/bin/bash

pwd
find
mkdir -p assets/bundled/
bash mergejs -c build/jsfilelist.txt assets/bundled/dist.js

