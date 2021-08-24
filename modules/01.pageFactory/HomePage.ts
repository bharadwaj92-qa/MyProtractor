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

export class HomePage{

    public worklist_header:WebElement;//Worklist header in the Home page
    

    constructor(){
        
        this.worklist_header=element(by.xpath("//h4[contains(.,'Work List')]"));
        
    }

    public async clickMenuItem(module:string, submodule:string){
        await browser.actions().mouseMove(element(by.xpath("//a[@href='#'][contains(.,'"+module+"')]"))).perform();
        await browser.sleep(2000);
        await element(by.xpath("//a/span[contains(.,'"+submodule+"')]")).click();
    }

    
}