let userBody =  {
  "title": "foo",
  "body": "bar",
  "userId": 102
};

let userParam =  {
    'id': 2
  };

let userHeaders =  {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer your_api_token',
  'Custom-Header': 'my_custom_value'
};

export default { userBody, userParam, userHeaders }