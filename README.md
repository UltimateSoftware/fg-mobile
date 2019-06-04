## Fearlessly Girl Mobile App

This project contains the Fearlessly Girl Mobile App.

Below you'll find information about installing and running this in your local environment. You will also see how to contribute to the project and the practices and patterns that are in use with examples of how to implement some interactions.

## Table of Contents

* [Installing](#install)
  * [Dependencies] (#dependencies)
  * [Installation] (#installation)
* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm test](#npm-test)
  * [npm run ios](#npm-run-ios)
  * [npm run android](#npm-run-android)
  * [npm run eject](#npm-run-eject)
* [Writing and Running Tests](#writing-and-running-tests)
* [Environment Variables](#environment-variables)
  * [Configuring Packager IP Address](#configuring-packager-ip-address)
* [Customizing App Display Name and Icon](#customizing-app-display-name-and-icon)
* [Sharing and Deployment](#sharing-and-deployment)
  * [Publishing to Expo's React Native Community](#publishing-to-expos-react-native-community)
  * [Building an Expo "standalone" app](#building-an-expo-standalone-app)
  * [Ejecting from Create React Native App](#ejecting-from-create-react-native-app)
    * [Build Dependencies (Xcode & Android Studio)](#build-dependencies-xcode-android-studio)
    * [Should I Use ExpoKit?](#should-i-use-expokit)
* [Troubleshooting](#troubleshooting)
  * [Networking](#networking)
  * [iOS Simulator won't open](#ios-simulator-wont-open)
  * [QR Code does not scan](#qr-code-does-not-scan)

## Install

We will use npm (though yarn will work) to install the project

### Dependencies

We are assuming that the react-native CLI is already installed, Along with (10.15 > Node Version) and (6.4.1 > NPM Version).

To install react-native cli
```
npm install -g react-native-cli
```

This project also depends on XCode being installed.

### Installation

Start by cloning the repository
```
git clone https://github.com/UltimateSoftware/fg-mobile.git
```

Change directory into the project
```
cd fg-mobile
```

Then install the project dependencies
```
npm install
```

Once the project is installed run
```
npm start
```

Which will trigger the build
