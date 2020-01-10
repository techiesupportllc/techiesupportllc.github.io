---
layout: post
title:  "How to Fix Gnome Terminal in Ubuntu Xenial Xerus"
date:   2018-09-25
---

## Introduction

[**Ubuntu**](https://www.ubuntu.com/) is quite possibly the most popular desktop distribution of Linux ever.  It provides a solid experience with a wealth of compatible software and a massive amount of tutorials online to do just about anything you could want.  That's why it's my distribution of choice and has been for a number of years now.

It used to use the **Unity** desktop environment by default, but as of the latest version (Bionic Beaver or 18.04) it has officially switched to the [**GNOME**](https://www.gnome.org/) desktop environment by default.  I personally prefer GNOME over Unity after using them both.

## The Problem

I use a [**Chromebook**](https://www.google.com/chromebook/) as my ultraportable laptop.  While I can do a lot within ChromeOS (especially now that it is starting to support Android apps), I still prefer certain tools like [**Atom**](https://atom.io/) that I can only get within a more traditional operating system like Windows or Ubuntu.

A project called [**crouton**](https://github.com/dnschneid/crouton) has existed for a few years now to allow ChromeOS users to also run full-blown Ubuntu on the same computer.  Naturally, I wanted to run Ubuntu on my Chromebook in order to access the tools I need for work.  Since I prefer GNOME, I wanted to install that variant of Ubuntu.  At this point in time, crouton doesn't work that well with Ubuntu 18.04.  To get the most stable environment I'm stuck using 16.04 (Xenial Xerus).

Ubuntu 16.04 with the GNOME desktop environment installs just fine with crouton on my Chromebook.  However, I noticed a strange behavior with the GNOME Terminal application.  It would appear to be launching and then just quit silently in the background without ever showing a window.  Some Google-fu helped me find the fix which I'll share below.

## The Fix

Keep in mind that this may be specific to ChromeOS devices using crouton.  I'm fairly certain I turned up a thread online where someone was also having this issue with Ubuntu GNOME 16.04 on a regular computer as well, but I can't remember for sure.

The problem lies with the proper language packs not being installed and the proper character encoding not being set in the system.  The fix itself is very straightforward and involves running a few commands in the terminal.  Of course, GNOME Terminal isn't working at this point, so the way I went about running these commands was to launch by Ubuntu instance straight to the command line as follows:

```
sudo enter-chroot
```

Afterwards, I ran the following commands:

```
sudo apt install language-pack-gnome-en language-pack-en
sudo apt install locales
sudo dpkg-reconfigure locales
```

Upon running the last command, you'll be presented with a screen asking which of the locales you would like to reconfigure.  Leave it at the default selection of all and hit Enter.  You'll then be asked which locale you want to set as the default for the system.  Use the arrow keys to select **en_US.UTF-8** and hit Enter again.  Finally, restart your chroot and you should have a working GNOME Terminal.

## Conclusion

Crouton is a great way to run Ubuntu on your Chromebook.  If you're like me and prefer the GNOME desktop environment, use the fix above to get your GNOME Terminal application up and running on a fresh install.

**<a href="mailto:help@techiesupport.co">Click here to get in touch with us!</a>**
