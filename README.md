# Fearlessly Girl Mobile App

[FearlesslyGirl](http://www.fearlesslygirl.com/) is an organization dedicated to making the world a kinder place by creating healthy discourse between highschool aged girls.

## Table of Contents


* [Setting Up fg-mobile](#setting-up-fg-mobile)
  * [Dependencies](#dependencies)
    * [OSX](#OSX)
    * [Windows](#windows)
  * [Running the Code](#running-the-code)
  * [Troubleshooting](#troubleshooting)
* [Contribution Guidelines](#contribution-guidelines)
* [Domain](#domain)
  * [Chapters](#chapters)
    * [Creating a Chapter](#creating-a-chapter)
    * [Joining a Chapter](#joining-a-chapter)
  * [User Roles](#user-roles)
    * [FearlesslyGirl Admins](#fearlesslygirl-admins)
    * [Chapter Advisors](#chapter-advisors)
    * [Chapter Officers](#chapter-officers)
    * [Chapter Members](#chapter-members)
  

## Setting Up fg-mobile

The FearlesslyGirl mobile application is built using React Native. The supporting API is a node application built with DynamoDB and Auth0 and can be found [here](https://github.com/UltimateSoftware/fg-server)

### Dependencies

#### 0 - Install Git

On OSX, if xcode is already installed, you should have git already. Else, follow instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install git.

#### OSX

In your favorite bash emulator (Terminal, iterm), run the following commands:

#### 1 - Install Homebrew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### 2 - Install nvm
NVM allows you to manage multiple versions of node at the same time without having to reinstall node each time. The node source code can be found [here](https://github.com/nvm-sh/nvm).

```
brew install nvm
```

After executing, you may still get an error when running `nvm`. You need to add the following to your `.bash_profile` or `.bashrc`:
```
export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion" ] && . "/usr/local/opt/nvm/etc/bash_completion"  # This loads nvm bash_completion
```

The outout of `brew install nvm` will also give you instructions on how to link nvm and configure your path in your `.bash_profile` or `.bashrc`.

#### 3 - Install version 11.6.0 of node with nvm

This project works with any node version higher than 10.x.x, but at time of writing latest node is 11.6.0

```
nvm install 11.6.0
```

If 11.6.0 is the only version of node you're installing with nvm, nvm will automatically set 11.6.0 as your defualt. If you'd like to set it as your default, you'll need to manually set the `default` alias with `nvm alias default 11.6.0`

Test your installation by executiong `node -v`. This should print out `v11.6.0`

#### 4 - Install the react-native cli

Node comes with npm, which is a package manager. Globally install the react-native cli by running
```
npm install -g react-native-cli
```

Note, this project requires npm to be version 6.4.1 or greater.

#### 5 - Make sure xcode and xcode command line tools are installed

You can download xcode from the Apple App Store. Once that is installed, run `xcode-select --install` and click install on the popup.

#### 6 - Install Android Studio (for android emulation)

Follow the guide [here](https://developer.android.com/studio/install) to install android studio on your mac. You will also need to [create an emulator](https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/creating_an_android_emulator.html)

#### Windows

#### 1a - Install Node

Download the NodeJS installer for windows [here](https://nodejs.org/en/download/) and follow instructions in the installer to set up.

#### 1b - Install nvm-windows

Follow instructions [here](https://github.com/coreybutler/nvm-windows) to install nvm-windows to manage multiple node versions.

#### 2 - Install the react-native cli

Node comes with npm, which is a package manager. Globally install the react-native cli by running
```
npm install -g react-native-cli
```

Note, this project requires npm to be version 6.4.1 or greater.

#### 3 - Install Android Studio (for android emulation)

Follow the guide [here](https://developer.android.com/studio/install) to install android studio on your Windows machine. You will also need to [create an emulator](https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/creating_an_android_emulator.html)

### Running the Code

#### 1 - Clone the fg-mobile repository
```
git clone https://github.com/UltimateSoftware/fg-mobile.git
```

#### 2 - Change into the project directory (OSX and Windows Powershell)
```
cd fg-mobile
```

#### 3 - Install node dependencies
```
npm install
```

#### 4 - Run metro bundler
```
npm start
```

#### 5a - Run iOS emulator (OSX only)

In a new terminal, run `react-native run-ios` to initiate an iOS build for the application. The first time you do this will take longer, about 5 minutes.

#### 5a - Run andorid emulator

In a new terminal, run `react-native run-android` to initiate an android build for the application. This will start the emulator you created in android studio.

### Troubleshooting

As people run into issues, please add here issues encountered and steps taken to resolve.

## Contribution Guidelines

We use basic gitflow. When creating a branch, preface it with `feature/` and provide a descriptive name of your branch. Any issues created should have acceptance criteria and potentially mockups for the feature. When coding on the feature branch is done, rebase onto master and open a pull request. It will be reviewed by two maintainers prior to merging.

## Domain
### Chapters
#### Creating a Chapter
#### Joining a Chapter
### User Roles
#### FearlesslyGirl Admins
#### Chapter Advisors
#### Chapter Officers
#### Chapter Members