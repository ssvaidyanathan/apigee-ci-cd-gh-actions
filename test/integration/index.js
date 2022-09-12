var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: './target/reports.json',
        output: './target/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: false,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "Apigee",
            "Browser": "n/a",
            "Platform": "SaaS Runner",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);