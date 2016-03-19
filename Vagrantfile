# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.provider "virtualbox" do |v|
      v.memory = 1024
  end

  config.vm.network "forwarded_port", guest: 3000, host: 3000

  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y git tree htop
    curl https://install.meteor.com/ | sh
    git clone https://github.com/jjlpr/whack/
    cd whack
    meteor
  SHELL
end


# wget https://nodejs.org/dist/v4.4.0/node-v4.4.0-linux-x64.tar.xz
# tar -xf node-v4.4.0-linux-x64.tar.xz
