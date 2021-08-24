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
import {RPMWorkListPage} from '../modules/01.pageFactory/RPMWorkListPage';
let loginpage: RenovaLoginPage = new RenovaLoginPage();
let homepage: HomePage = new HomePage();
let rpmWL: RPMWorkListPage = new RPMWorkListPage();

//Scenario: Verify user is navigated to RPM daily review screen when clicked on RPM Worklist menu item in the header
Given('user has logged into the application', { timeout: 2000 * 2000 },async () => {
    await loginpage.loginIntoApplication();
});
When('user hovers on RPM module and clicks on RPM Worklist menu item', { timeout: 2000 * 2000 },async () => {
    await browser.waitForAngularEnabled(false);
    await browser.sleep(13000);
    await homepage.clickMenuItem('RPM','RPM Worklist');//clicking on the RPM Worklist in the header menu
    
});
Then('user should be navigated to RPM daily review screen', { timeout: 2000 * 2000 },async () => {
    await browser.waitForAngularEnabled(false);
    await browser.sleep(5000);
    try{
        await rpmWL.rpm_worklist_header.isDisplayed().then(function(displayed){
           console.log("user is navigated to RPM daily review screen: "+displayed);
        })
    }catch(error){
        console.log("Exception handles: "+error);
        expect(true).to.equal(false,error);
    }

});