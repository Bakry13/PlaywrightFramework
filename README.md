# Playwright Framework

*- This project is a base project to build a solid test automation framework using playwright test automation tool and typescript programming language.*

*- You can use this framework to be a start point for your test automation project to write your automated test cases.*

*- You can find more details in playwright official website documentation:*
https://playwright.dev/docs/intro

## `Preparation:`

### A. Pre-requirements:

#### 1- Download and install latest nodejs through the below link
https://nodejs.org/en/download
        
#### 2- Download and install visual studo code throw the below link
https://code.visualstudio.com/download

### B. Project readiness

#### 1- Clone the project

#### 2- Run the below command to install the required dependancies

        npm install

## `Features:`

### A. Usage of Playwright advantages:

#### 1- Waits and timout adjustment
* Total run timeout
* Action timeout
* Expect timeout

#### 2- Screenshots, video recording and trace preparation
* General adjustment across the project
* Special adjustment per browser

#### 3- Different types of reports configurations
* html - json - junit - line - dot

#### 4- Parallel execution and number of workers adjustment
* Number of worker adjustment inside the config file

#### 5- Fixtures
* Grouping pages and general actions related to set of tests
* Adding an example of using fixtures

#### 6- Global Setup
* Preserving cookies to avoid repeating login actions
* Adding the pre required actions of the test run

#### 7- API tests
* Adding usable API URLs
* Applying api tests with different methods using simple examples

#### 8- Visual test
* Applying visual tests in different pages using simple examples

#### 9- Tests examples
* Simple examples of test cases scripts using some options like "annotations, filteration, ..."

### B. Extra features:

#### 1- Page Object Model design pattern
* Separating pages contents in different modules to enhance readability and maintainability

#### 1- Project structure adjustment to modules
* Dividing the project into modules according to its functionality and usage

#### 2- Using data driven framework
* Separating test data to external files to enhance readability and maintainability
* Reading from different types of files (json format, csv and excel sheets)

#### 3- Running in different environments
* Adding an option to pass the environemnt value through CLI
* Adjustment of the baseURL in code and config file according to the running environment
* Adjustment of different data files according to the running environment

#### 4- Database connection
* Adding a usable module for mysql DB connection

#### 5- Handling different languages
* Adding a simple technique to run the test cases in different language
* Adding an option to pass the language through CLI

#### 6- Allure report
* Adding allure report with more alnaytics and charts options to enhance readability and visibility to the test report
* Adjusting the report to attach (screenshots, videos, trace and console logs)

#### 7- Using BDD framework
* Adding the ability to apply BDD test automation framework using cucumber tool
* Adjustment for cucumber run (feature files, steps and cucumber.json for test runner)
* Adding cucumber report for logging the test results
* Adding a simple example of BDD tests

#### 8- Eslint tool for static analysis
* Adding the eslint dependency for static analysis for typescript code
* Adding .eslintc.js config file to adjust its rules

## `Contents:`

### A. Folders and directories:

#### 1- tests/ui/specs/:
* All frontend test cases scripts

#### 2- tests/api/specs/:
* All API test cases scripts

#### 3- tests/ui/pages/:
* All frontend pages

#### 4- tests/api/endpoints/:
* General used endpoints requests, request bodies, params and headers for APIs

#### 5- tests/ui/fixtures/:
* All used frontend fixtures according to test groups

#### 6- tests/api/fixtures/:
* All used API fixtures according to test groups

#### 7- tests/features/:
* Cucumber features which contain test scenarios

#### 8- tests/steps/:
* Cucumber steps which contain the implementation of test scenarios

#### 9- tests/test-data/:
* All test data files with different types (json format, csv and excel sheets)

#### 10- tests/utilities/readers/:
* All test data readers for different file types (csv and excel, ...)

#### 11- tests/utilities/setup/:
* global-setup.ts: for Global Setup method implementation
* env-setup.ts: for adjusting the data needed for every environment (test, preprod and production)

#### 12- tests/utilities/URLs/:
* environmentBaseUrl.ts: base URL for every environment
* uiPages.ts: all routs and endpoints for frontend pages
* apiEndpoints.ts: all routs and api endpoints for API tests

#### 13- tests/utilities/:
* assertions.ts: general implementation for used assertions in different modules
* db-actions.ts: configurations and functions needed for mysql database conection
* paths.ts: all used files paths in different modules (data files, screenshots, ...)
* screenshot.css: visual testing configuration for dynamic pages

#### 14- reports/:
* Allure report data
* Cucumber report
* Other needed reports

#### 15- playwright-report/:
* Playwright default reports (html, line, dot, json, junit, ...)

#### 16- test-results/:
* All results of test cases runs (screenshots, vidos, trace, ...)

#### 17- node_modules/:
* All downloaded libraries and modules

### B. Project configuration files:

#### 1- playwright.config.ts, test.config.ts, staging.config.ts, api.config.ts: 
* The default generated file is "playwright.config.ts"
* Waits, browsers, fully parallel, reporters, default number of worksers, ...
* General configurations across the project

#### 2- package.json:
* Project properities
* Scripts and keywords
* Installed dependencies

#### 3- package-lock.json:
* Detailed Installed dependencies

#### 4- .gitignore:
* All files and folders that needs to be excluded from pushing to the version control

#### 5- .env:
* Environment variables
* Secrets
* Running language

#### 6- storageState:
* To save login cookies and optimizing authentication

#### 7- cucumber.json:
* Configurations, (features, steps paths) and report for cucumber and BDD framework tests

#### 8- Jenkinsfile:
* Configurations and commands for installing playwright and running tests in Jenkins pipeline

#### 9- .github/workflows/playwright.yml:
* Configurations and commands for installing playwright and running tests in github actions pipeline

#### 10- .eslintrc.js:
* Configurations and rules for code static analysis

## `How to run?`

### A. Running normal test cases:

#### 1- Use direct command as below:

        npx playwright test

#### 2- Show the report:

        npx playwright show-report

#### 3- To pass the used environment or language you can use the below bash command:

        ENV=test LANGUAGE=ar npx playwright test

### B. Running test cases using a pre-defined script in package.json:

        npm run {predefined command}

### C. Running cucumber test:

        cucumber-js test

### D. Generating/ Openning Allure report:

#### 1- Generate the report:

        npx allure generate {report path} -o {generation path} --clean

#### 2- Open the report:

        npx allure open {generated report path}

### E. Using Eslint to make static analysis:

#### 1- Run Eslint command:

        npx eslint {file path} 

#### 2- Check the errors across the files

## `Project Structure:`
*The below is a package diagram for the implemented project structure "Files and folders"*

![Screenshot](PlaywrightFramework.JPG)

## `General instructions and guidelines:`

* Specify files and tags that should be run according to bussiness group and testing needs

* Configure package.json file for frequently used commands

* Configure .env file for test environment, secrets and used lanugage

* Every test should have its representative name

* Pages should hold locators, strings, actions and assertions

* Assertions uses playwright validations and assertion module

* It is recommended to collect cases under descripe group

* Files and folders should be named with this formate {firstWord-SecondWord..}

* Variables and methods should start with small letters

* Write locators, scenario steps and tests in the order of the page under test

* Do not assert on existence of a certain element if we will assert on its text

* Do not write any functions if you will not use it

* For every api we create tests in spec file and general used bodies, headers and params under endpoints directory

* For using BDD approach, every feature should has 3 files (feature file - steps - page)

* For using BDD approach, feature files should have business scenarios

* For using BDD approach, steps should has technical steps and use pages

* For using BDD approach, steps module should be named with {featureName-steps}

* For using BDD approach, do not make more than 2 Then in the scenario except view page scenario

#### *`Notes:`*
* *It is not recommended to use BDD framework in playwright project as you will lose some of playwright advantages*
* *If you will not use BDD framework, you will need to remove these folders and files: (cucumber.json - features - steps)*