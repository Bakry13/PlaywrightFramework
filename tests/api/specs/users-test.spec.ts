import { test, expect } from '@playwright/test';
import usersEndpoints from '../../api/endpoints/users-endpoints';

//==========exclude test file from global setup cookies==========
test.use({storageState:{cookies:[],origins:[]}});
//=======================Variables==========================
let getUsersResponseBody;
let postUserResponseBody;
let response;
//====================================Tests==================================
//=================================get 200===================================
test.describe('Users API test',() =>{
    test('Check get users response status code', async ({request}) => {
        response = await usersEndpoints.getUsers(request);
        expect(response.status()).toBe(200);
    });

    test('Check get users response list length', async ({request}) => {
        response = await usersEndpoints.getUsers(request);
        getUsersResponseBody = JSON.parse(await response.text());
        expect(getUsersResponseBody.length).toBe(100);
    });

    test('Check get users response first item title', async ({request}) => {
        // response = usersEndpoints.getUsers(request);
        // getUsersResponseBody = JSON.parse(await response.text());
        expect(getUsersResponseBody[0].title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    });

    test('Check get users response for a specific user', async ({request}) => {
        response = await usersEndpoints.getSpecificUser(request);
        getUsersResponseBody = JSON.parse(await response.text());
        expect(getUsersResponseBody[0].title).toBe('qui est esse');
    });
    //=================================post 201===================================
    test('Check post user response status code and body', async ({request}) => {
        response = await usersEndpoints.postUsers(request);
        expect(response.status()).toBe(201);
        postUserResponseBody = JSON.parse(await response.text());
        expect(postUserResponseBody.id).toBe(101);
    });
}
);