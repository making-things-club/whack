# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.provider "virtualbox" do |v|
      v.memory = 2048
  end

  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "forwarded_port", guest: 5858, host: 5858
  config.vm.network "forwarded_port", guest: 8080, host: 8080

  # Had to run as sudo to get some ports listening :(

  config.vm.provision "shell", inline: <<-SHELL
    wget https://deb.nodesource.com/setup -O /tmp/node.sh
    chmod +x /tmp/node.sh
    /tmp/node.sh
    apt-get update
    apt-get install -y nodejs htop git
    sudo npm install -g mupx
    curl https://install.meteor.com/ | sh
  SHELL
end
