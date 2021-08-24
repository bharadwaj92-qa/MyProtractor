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

export class RPMWorkListPage{

    public rpm_worklist_header:WebElement;//RPM Worklist header in the RPM worklist page
    

    constructor(){
        
        this.rpm_worklist_header=element(by.xpath("//h4[contains(.,'RPM Worklist')]"));
        
    }

   

    
}