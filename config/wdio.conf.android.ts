import { config as sharedConfig } from "./wdio.conf.js";

export const config = {
    ...sharedConfig,
    port: 4723,
    services: ["appium"],
    appium: {
      args: ["--allow-insecure"],
    },
    capabilities: [{
      // capabilities for local Appium web tests on an Android Real device
      platformName: 'Android',
      'appium:deviceName': 'R58N701TRGJ',
      'appium:appPackage': 'com.sec.android.app.popupcalculator',
      'appium:appActivity': 'com.sec.android.app.popupcalculator.Calculator',
      'appium:platformVersion': '12.0',
      'appium:automationName': 'UiAutomator2',
      "appium:autoLaunch": false
  }],

  beforeTest: async function() {
    await driver.execute('mobile: activateApp', {
      appId: 'com.sec.android.app.popupcalculator'
    });
  },

  afterTest: async function() {
    await driver.execute('mobile: terminateApp', {
      appId: 'com.sec.android.app.popupcalculator'
    });
  }

}
