import { test, expect } from '@playwright/test';
import envSetup from '../../utilities/setup/env-setup';
import apiEndpoints from '../../utilities/URLs/apiEndpoints';
import userBody from '../../pages/api/user-body';
import users from '../../pages/api/users';

//==========exclude test file from global setup cookies==========
test.use({storageState:{cookies:[],origins:[]}});
//=======================Variables==========================
let baseURL = envSetup.getAPIEnvURL();
let getUsersBody;
let postUserBody;
//====================================Tests==================================
//=================================get 200===================================
test.describe('Users API test',() =>{
    test('Check get users response status code', async ({request}) => {
        const response = await request.get(baseURL+apiEndpoints.getUsers);
        expect(response.status()).toBe(200);
    });

    test('Check get users response list length', async ({request}) => {
        const response = await request.get(baseURL+apiEndpoints.getUsers);
        getUsersBody = JSON.parse(await response.text());
        expect(getUsersBody.length).toBe(100);
    });

    test('Check get users response first item title', async ({request}) => {
        // const response = await request.get(baseURL+apiEndpoints.getUsers);
        // getUsersBody = JSON.parse(await response.text());
        expect(getUsersBody[0].title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    });

    test('Check get users response for a specific user', async ({request}) => {
        const response = await request.get(baseURL+apiEndpoints.getUsers, {
            params: users.userParam
        });
        getUsersBody = JSON.parse(await response.text());
        expect(getUsersBody[0].title).toBe('qui est esse');
    });
    //=================================post 201===================================
    test('Check post user response status code and body', async ({request}) => {
        const response = await request.post(baseURL+apiEndpoints.postUser,{
            // headers: users.userHeaders,
            data: userBody
        });
        
        expect(response.status()).toBe(201);
        postUserBody = JSON.parse(await response.text());
        expect(postUserBody.id).toBe(101);
    });
}
);