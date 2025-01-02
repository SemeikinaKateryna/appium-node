import Page from './page.js';

const multiplyBtn = '//android.widget.Button[@content-desc="Умножение"]'
const equalsBtn = '//android.widget.Button[@content-desc="Равно"]'
const resultNumber = '//android.widget.EditText[@resource-id="com.sec.android.app.popupcalculator:id/calc_edt_formula"]'
const divideBtn = '//android.widget.Button[@content-desc="Деление"]'
const errorMessage = '//android.widget.TextView[@resource-id="com.sec.android.app.popupcalculator:id/snackbar_text"]'

const numberBtnByParam = (numberParametr: string): string => {
    return `//android.widget.Button[@content-desc="${numberParametr}"]`;
};

const engineerModeBtn = '//android.view.ViewGroup[@content-desc="Инженерный режим Кнопка"]'
const powerBtn = '//android.widget.Button[@content-desc="x в степени y"]' 

class MainPage extends Page{

    public async clickOnNumberByParam(numberParametr: string): Promise<void> {
        await this.clickElement(numberBtnByParam(numberParametr))
    }

    public async clickOnMultiplyBtn(): Promise<void>{
        await this.clickElement(multiplyBtn)
    }

    public async clickOnDivideBtn(): Promise<void>{
        await this.clickElement(divideBtn)
    }

    public async clickOnPowerBtn(): Promise<void>{
        await this.clickElement(powerBtn)
    }

    public async clickOnEqualsBtn(): Promise<void>{
        await this.clickElement(equalsBtn)
    }

    public async clickOnEngineerModeBtn(): Promise<void>{
        await this.clickElement(engineerModeBtn)
    }

    public async isResultDisplayed(): Promise<void>{
        await this.isElementDisplayed(resultNumber)
    }

    public async isErrorMessageDisplayed(): Promise<void>{
        await this.isElementDisplayed(errorMessage)
    }

    public async getResultText(): Promise<string>{
        const element = await this.getElement(resultNumber);
        return await element.getText();
    }

    public async getErrorMessageText(): Promise<string>{
        const element = await this.getElement(errorMessage);
        return await element.getText();
    }
}

export default new MainPage;