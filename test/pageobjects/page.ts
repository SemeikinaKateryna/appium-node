import { $ } from '@wdio/globals';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

export default class Page {

  public async getElement(element: string) {
    return $(element);
    }
  
  public async isElementDisplayed(element: string): Promise<boolean> {
    const elem = await this.getElement(element);
    return await elem.isDisplayed()
    }
  
  public async waitUntilElementDisplayed(selector: string): Promise<void> {
    const element = await this.getElement(selector);
    await element.waitUntil(async () => {
        return await this.isElementDisplayed(selector);
    }, {
        timeout: 5000,
        timeoutMsg: `Element ${selector} was not displayed within the timeout.`,
    });
  }
  
  public async clickElement(element: string): Promise<void> {
    await this.waitUntilElementDisplayed(element);
    const elem = await this.getElement(element);
    await elem.click();
  }
}
  