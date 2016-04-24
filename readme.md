# WHACK!

A super cool whack-mole-game.

[![Circle CI](https://circleci.com/gh/jjlpr/whack.svg?style=svg)](https://circleci.com/gh/jjlpr/whack)

## Install

### In VM?

If you want to put everything in a VM then you can use the `Vagrantfile` -
this will spin up the box and install meteor (hopefully).

```sh
vagrant up
vagrant ssh
```

### Otherwise:

Install meteor:

```sh
curl https://install.meteor.com/ | sh
```

### All together:

If you're on local or vm, install whack and now run meteor:

```
git clone git@github.com:jjlpr/whack.git
cd whack
meteor
```

And you might get an error about `EACCESS`, if so use `sudo meteor`.

## Reloading VM

Vagrant links the `whack` folder to `/vagrant`, so run the `reload_vm.sh`
script to pull the latest info (this is only required because `sudo` is
needed for running the server). On the vm do:

```sh
/vagrant/reload_vm.sh
```

## Deployment

We're experimenting with [mup](https://github.com/arunoda/meteor-up/tree/mupx)
for deployment. On the vagrant box:

```sh
cd whack
mupx setup
mupx deploy
```
