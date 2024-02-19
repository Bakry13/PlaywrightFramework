import { FullConfig } from "@playwright/test";
import baseEnvUrl from '../URLs/environmentBaseUrl';
import testData from '../../test-data/test-users';
import stagingData from '../../test-data/staging-users';
import readExcel from "../readers/excel-reader";
import readCsv from "../readers/csv-reader";
//======================Variables====================
const csvTestData = readCsv('csv-test-users.csv');
const csvStagingData = readCsv('csv-staging-users.csv');
const excelTestData = readExcel('excel-test-users.xlsx');
const excelStagingData = readExcel('excel-staging-users.xlsx');
//========================Getters====================
function getBaseURL(config: FullConfig) {
    const { baseURL } = config.projects[0].use;
    return baseURL;
}

function getEnvURL() {
    const env = process.env.ENV!;
    if (env == 'staging') {
        return baseEnvUrl.staging.home;}
    else{
        return baseEnvUrl.test.home;
    }
}

function getAPIEnvURL() {
    const env = process.env.ENV!;
    if (env == 'staging') {
        return baseEnvUrl.staging.api;}
    else{
        return baseEnvUrl.test.api;
    }
}

function getTestData() {
    const env = process.env.ENV!;
    if (env == 'staging') {
        return stagingData;
    }
    else{
        return testData;
    }
}

function getCSVTestData() {
    const env = process.env.ENV!;
    if (env == 'staging') {
        return csvStagingData;
    }
    else{
        return csvTestData;
    }
}

function getExcelTestData() {
    const env = process.env.ENV!;
    if (env == 'staging') {
        return excelStagingData;
    }
    else{
        return excelTestData;
    }
}

export default {getBaseURL, getEnvURL, getAPIEnvURL, getTestData, getCSVTestData, getExcelTestData};