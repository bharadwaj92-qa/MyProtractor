import { $, browser, By, by, element, WebElement, ElementFinder, protractor, ElementArrayFinder } from 'protractor';

export class SamplePage{

    public textArea:WebElement;
    public results:WebElement;

    constructor(){
        
        this.textArea=element(by.xpath("//input[@title='Search']"));
        this.results=element(by.xpath("//div[@id='result-stats']"));

    }

    
}