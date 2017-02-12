#!/usr/bin/env bash

# install nodejs
#sudo apt-get install -y nodejs
#sudo ln -s /usr/bin/nodejs /usr/bin/node

curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
#sudo ln -s /usr/bin/nodejs /usr/bin/node

# install npm
#sudo apt-get -y update
#sudo apt-get install -y npm

# get packages
#npm install