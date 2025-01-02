# e2e-tests, wdio v8, appium v2, native app (android)

e2e-test with native mob app

## Setup

### Install software and check out the project

- Download and install Node.JS ( at least 16.17 )
- Typescript 5+ version
- Install Visual Studio Code
- Clone and checkout the github project
- npm install

### How to run the android tests on windows

We defined a default configuration (config/wdio.android.conf.js) for Android which will be executed when you run "npm run test:android".

Be sure that you have:

- Install Java latest via https://www.java.com/ru/download/manual.jsp
- Set the environment variable called `JAVA_HOME` to the jre directory (C:\Program Files\Android\Android Studio\jre\)
- Install Node v16+ https://nodejs.org/uk
- installed the latest Android Studio version https://developer.android.com/studio
- Add `ANDROID_HOME` to path in OS system variables
- Install Appium by command: `npm install -g appium`
- Install Appium inspector v2+ https://github.com/appium/appium-inspector/releases
- Install Appium drivers (uiautomator2, xcuitest and etc..; `appium driver install uiautomator2`)
- Allow virtualization in BIOS https://www.youtube.com/watch?v=UgDxU0jZAe4
- plugged in any android device into your computer. Leave it unlocked.
- allowed USB-Debugging on the connected android device
- run `adb devices` to check device name( device id )
- set the platform version, device name and path to apps(apk/ipa) inside android config (config/wdio.adndroid.conf.js) to the version on your android device.
- run `appium` in cmd
- now you can interact with your apps through the appium inspector on your PC

### Commands to run
- to run tests use command
```sh
npm run test:android
```

### Commands to generate Allure report
- to generate Allure test result report use command
```sh
npm run allure:generate
```
- to see Allure test result report use command
```sh
npm run allure:serve
```
![image](https://github.com/user-attachments/assets/a6716e89-6c4e-4a5c-a10e-d8d72cc85554)
