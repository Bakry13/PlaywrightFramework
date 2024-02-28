import envSetup from '../../utilities/setup/env-setup';
import apiEndpoints from '../../utilities/URLs/apiEndpoints';
import userBody from './user-body';

//=======================Variables==========================
let baseURL = envSetup.getAPIEnvURL();
//======================Request Objects=====================
const userRequestBody =  {
  "title": "foo",
  "body": "bar",
  "userId": 102
};

const userParam =  {
    'id': 2
  };

const userHeaders =  {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer your_api_token',
  'Custom-Header': 'my_custom_value'
};
//==========================Requests===========================
//---------------------------Get 200---------------------------
async function getUsers(request) {
  const response = await request.get(baseURL+apiEndpoints.getUsers);
  return response;
}
//-------------------------------------------------------------
async function getSpecificUser(request) {
  const response = await request.get(baseURL+apiEndpoints.getUsers, {
    params: userParam
  });
  return response;
}
//---------------------------Post 201---------------------------
async function postUsers(request) {
  const response = await request.post(baseURL+apiEndpoints.postUser,{
    // headers: userHeaders,
    // data: userBody
    data: userRequestBody
  });
  return response;
}

export default { getUsers, getSpecificUser, postUsers };