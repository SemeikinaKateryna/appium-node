import { expect } from '@wdio/globals'
import mainPage from '../pageobjects/main.page.ts';

describe('Samsung Calculator features E2E', () => {
    it('should multiply two by two and check result', async () => {
        await mainPage.clickOnNumberByParam("2")
        await mainPage.clickOnMultiplyBtn()
        await mainPage.clickOnNumberByParam("2")
        await mainPage.clickOnEqualsBtn()
        expect(mainPage.isResultDisplayed())
        await expect(await mainPage.getResultText()).toEqual(expect.stringContaining('4'))
    })

    it('should make division by zero and check error message', async () => {
        await mainPage.clickOnNumberByParam("2")
        await mainPage.clickOnDivideBtn()
        await mainPage.clickOnNumberByParam("0")
        await mainPage.clickOnEqualsBtn()
        await expect(await mainPage.getErrorMessageText()).toEqual('Нельзя делить на ноль.')
    })
    
    it('should enter a very long number and check error message', async ()=> {
        for(let i = 0; i < 16; i++){
            await mainPage.clickOnNumberByParam("2")
        }
        await expect(await mainPage.getErrorMessageText()).toEqual('Невозможно ввести более 15 цифр.')
    })

    it('should enter not a number first and check error message', async ()=> {
        await mainPage.clickOnDivideBtn()
        await expect(await mainPage.getErrorMessageText()).toEqual('Использован недопустимый формат.')
    })

    it('should raise maximum number to a power of maximum number and check error message', async ()=> {
        for(let i = 0; i < 15; i++){
            await mainPage.clickOnNumberByParam("9")
        }
        await mainPage.clickOnEngineerModeBtn()
        await mainPage.clickOnPowerBtn()
        for(let i = 0; i < 15; i++){
            await mainPage.clickOnNumberByParam("9")
        }
        await mainPage.clickOnEqualsBtn()
        await expect(await mainPage.getErrorMessageText()).toEqual('Результат расчетов выходит за пределы допустимого диапазона.')
    })
})

