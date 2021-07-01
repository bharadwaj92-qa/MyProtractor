import { browser, Config } from 'protractor';
// const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: "https://www.google.com",
    directConnect: true,
    chromeDriver:"../modules/02.resources/ChromeDriver/chromedriver.exe",
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["../Features/SampleModule/Sample.feature"],
    onPrepare: () => {
        browser.manage().window().maximize();
        browser.driver.manage().timeouts().setScriptTimeout(120000);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: 'json:.tmp/results.json',
        require: ["../typeScript/stepDef/*.js"],
        strict: true
    },
    multiCapabilities: [{
            browserName: 'chrome',
            shardTestFiles: true,
            args: ['--no-sandbox'],
            maxInstances: 4,
            chromeOptions: {
                args: ['disable-infobars'],
                "useAutomationExtension": false
            }
    }],
    plugins: [{
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                displayDuration: true,
            },
    }],
    plugins1:[{package: 'protractor-react-selector'}
             ]

};
