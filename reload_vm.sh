#!/bin/bash

cd ~
rm -rf whack/

set -e

cp /vagrant/ whack -rf
cd whack
sudo meteor
