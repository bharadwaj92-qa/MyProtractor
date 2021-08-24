import { $, browser, By, by, element, WebElement, ElementFinder, protractor, ElementArrayFinder } from 'protractor';
// import { Helpers } from '../03-resources/protractorHelpers/Helpers';
import { configure, getLogger } from 'log4js';
import { stat } from 'fs';
import { connectLogger } from 'log4js';
import { assert } from 'console';

const Assert = require('chai').assert;
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
// const helpers: Helpers = new Helpers();
var log4js = require('log4js');
var logger = log4js.getLogger();

export class RenovaLoginPage{

    public ok_urlConfirmPopup:WebElement;//OK button in the URL Confirm popup
    public emailaddr_textbox:WebElement;//Email address text area
    public password_textbox:WebElement;//Password text area
    public login_button:WebElement;//Login button

    constructor(){
        
        this.ok_urlConfirmPopup=element(by.id("confirm_url_ok"));
        this.emailaddr_textbox=element(by.xpath("//input[@id='email']"));
        this.password_textbox=element(by.xpath("//input[@id='password']"));
        this.login_button=element(by.xpath("//button[@id='login']"));
    }

    public async loginIntoApplication(){
        await browser.waitForAngularEnabled(false);
        try{
          await browser.get("http://rcarestaging.d-insights.global/rcare-login");
        }catch(error){
            console.log("Exception handles: "+error);
            expect(true).to.equal(false,error);
        }  
        await browser.sleep(4000);
        await this.ok_urlConfirmPopup.click();
        await browser.sleep(500);
        await this.emailaddr_textbox.sendKeys("orgdemo@renovahealth.care");
        await this.password_textbox.sendKeys("RCuiPrdOD102020");
        await this.login_button.click();

    }

    
}