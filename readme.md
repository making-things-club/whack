# WHACK!

A super cool whack-mole-game.

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
