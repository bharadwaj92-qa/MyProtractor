import { Given, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

import {SamplePage} from '../modules/01.pageFactory/SamplePage';
let samplePage: SamplePage = new SamplePage();

Given('user launches Google search engine', { timeout: 1000 * 1000 } ,async()=> {
    await browser.waitForAngularEnabled(false);
    await browser.get("https://www.google.com/");
    await browser.sleep(1000); 
    
});
When('user enters any text {string} and hits enter', { timeout: 1000 * 1000 },async(string)=> {
    try{
      await samplePage.textArea.sendKeys(string);
      await samplePage.textArea.sendKeys(protractor.Key.ENTER);
    }catch(error){
        console.log(error);
    }  
});
Then('user should see the results', { timeout: 1000 * 1000 },async()=> {
    await browser.sleep(1000);
    await browser.waitForAngularEnabled(false);
    try{
        await samplePage.results.isDisplayed().then(function(displayed){
            console.log("Results are appearing: "+displayed);
        });
    }catch(error){
        console.log(error);
    }

});