//Standard imports
import { $, browser, By, by, element, WebElement, ElementFinder, protractor,ElementArrayFinder, promise} from 'protractor';
// import { Helpers } from '../../../03 - resources/protractorHelpers/Helpers';
// import { Helpers } from '../modules/03-resources/protractorHelpers/Helpers';
import { Given, Then, When } from 'cucumber';
import { isNullOrUndefined } from 'util';
import { connectLogger } from 'log4js';
import { Driver } from 'selenium-webdriver/chrome';
import chai from 'chai';
// import axios from 'axios'
// import {ApiUtil} from '../modules/04-utils/api';

//Standard methods

const chai = require("chai").use(require("chai-as-promised"));
const Assert = require('chai').assert;
const expect = chai.expect;
const expectedConditions = protractor.ExpectedConditions;
const defineSupportCode = require('cucumber').defineSupportCode;
var log4js = require('log4js');
var logger = log4js.getLogger();
var axios = require("axios");
logger.level = 'info';

import {RenovaLoginPage} from '../modules/01.pageFactory/RenovaLoginPage';
import {HomePage} from '../modules/01.pageFactory/HomePage';
let loginpage: RenovaLoginPage = new RenovaLoginPage();
let homepage: HomePage = new HomePage();

//Scenario: Verify user is able to login into the application
Given('user launched Renova application', { timeout: 2000 * 2000 },async () => {
    await browser.waitForAngularEnabled(false);
    try{
      await browser.get("http://rcarestaging.d-insights.global/rcare-login");
    }catch(error){
        console.log("Exception handles: "+error);
        expect(true).to.equal(false,error);
    }  
    await browser.sleep(4000);
    await loginpage.ok_urlConfirmPopup.click();
});
Given('user provides Email address and password', { timeout: 2000 * 2000 },async () => {
    await browser.sleep(500);
    await loginpage.emailaddr_textbox.sendKeys("orgdemo@renovahealth.care");
    await loginpage.password_textbox.sendKeys("RCuiPrdOD102020");
});
When('user clicks on Login button', { timeout: 2000 * 2000 },async () => {
    await loginpage.login_button.click();
});
Then('user should navigate to home screen ie Patients Worklist', { timeout: 2000 * 2000 },async () => {
    await browser.sleep(5000);
    await browser.waitForAngularEnabled(false);
    try{
        await homepage.worklist_header.isDisplayed().then(function(displayed){
         console.log("User is in Home page:  "+displayed);
        })
    }catch(error){
        console.log("Exception handles: "+error);
        expect(true).to.equal(false,error);
    }    
});
























