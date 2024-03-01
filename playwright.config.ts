import { defineConfig, devices } from '@playwright/test';
import baseEnvUrl from './tests/utilities/URLs/environmentBaseUrl';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();
/**
 * Report portal configuration for CI/CD report generation
 * https://github.com/reportportal/agent-js-playwright
 */
const RPconfig = {
  apiKey: '00000000-0000-0000-0000-000000000000',
  endpoint: 'https://your.reportportal.server/api/v1',
  project: 'Your reportportal project name',
  launch: 'Your launch name',
};

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Retry */
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html"],["allure-playwright", {outputFolder: "./reports/allure-results"}]],
  // reporter: 'html',
  //for multiple reporter view
  // reporter: [
  //   ['allure-playwright', {
  //      detail: true,
  //      outputFolder: "./reports/allure-results",
  //      suiteTitle: false,
  //   }],
  //   ['html', { open: 'never' }, { outputFolder: 'test-results' }, { attachmentsBaseURL: 'https://external-storage.com/' }],
  //   ['@reportportal/agent-js-playwright', RPconfig],
  //   ['line'],
  //   ['list', { printSteps: true }],
  //   ['dot'],
  //   ['junit'],
  //   ['json', {  outputFile: 'test-results.json' }]
  // ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
 //Global setup for authentication firstly
  // globalSetup: require.resolve('./tests/utilities/setup/global-setup'),
  //Default wait is 5s
  expect: {
    timeout: 7000, //timeout for validation
    // toHaveScreenshot: { maxDiffPixels: 100 },
    toHaveScreenshot: {
      stylePath: './tests/utilities/screenshot.css'
    },
  },
  timeout: 60*60*2*1000, //General timeout for the whole run is 2hr
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    //Storage state for  autnentication firstly
    // storageState: 'storageState.json',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    viewport: {width:1920, height:1080},
    // launchOptions: {
    //   // ... other options
    //   args: ['--start-maximized'],
    // },
    trace: 'on-first-retry',
    actionTimeout:6000, 
    navigationTimeout:30000,
    screenshot: 'only-on-failure',
    // headless: false,
    baseURL: process.env.ENV === 'production' 
      ? baseEnvUrl.production.home
      : process.env.ENV === 'staging' 
        ? baseEnvUrl.staging.home
        : baseEnvUrl.test.home
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
      screenshot:"on",
      // video:"on",
      trace:"on"
    },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
