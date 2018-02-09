const reqPromise = require('request-promise');
const apiAuth = require('./api-auth');

function getHeaders(reqHeaders, token) {
  if (token) {
    reqHeaders['authorization'] = 'Bearer ' + token.access_token;
    reqHeaders['Accept'] = 'application/json';
  }
  console.log(reqHeaders);
  return reqHeaders;
}

function sendRequest(req) {
  return apiAuth.authToken(req.header('x-uboxit-username'))
    .then((token) => {
    console.log(token);
      return reqPromise({
        uri: 'http://188.166.82.127:8085' + req.url,
        method: req.method,
        body: req.body,
        headers: getHeaders(req.headers, token),
        json: true,
        simple: false,
        resolveWithFullResponse: true
      }).then((response) => {
        return response;
      }).catch((err) => {
          console.log(`Error in Processing Request for ${apiUrl} error log - ${err}`);
        return Promise.reject(err);
      });
  })
  .catch((error) => {
      return Promise.reject(error);
  });
}

function createOrUpdateCustomer(req) {
  console.log('create customer');
  return apiAuth.authToken()
    .then((token) => {
    console.log(token);
    return reqPromise({
      uri: 'http://188.166.82.127:8085' + req.url,
      method: req.method,
      body: req.body,
      // fresh header are required to access customer api
      headers: getHeaders({}, token),
      json: true,
      simple: false,
      resolveWithFullResponse: true
    }).then((response) => {
      // once user is created, just get token for the user
      apiAuth.authToken(req.body.email, req.body.password)
      .then(token => console.log(token));
      return response;
    }).catch((err) => {
        console.log(`Error in Processing Request for ${apiUrl} error log - ${err}`);
      return Promise.reject(err);
    });
  })
  .catch((error) => {
      return Promise.reject(error);
  });
}

function login(req) {
  return apiAuth.authToken(req.body.username, req.body.password)
    .then((token) => {
    console.log(token);
    return reqPromise({
        uri: 'http://188.166.82.127:8085' + req.url + '?emailId=' + req.body.username,
        method: 'GET',
        form: req.body,
        headers: getHeaders(req.headers, token),
        json: true,
        simple: false,
        resolveWithFullResponse: true
    }).then((response) => {
      console.log(response);
      return response;
    }).catch((err) => {
        console.log(`Error in Processing Request for ${apiUrl} error log - ${err}`);
        return Promise.reject(err);
      });
    }).catch((error) => {
        return Promise.reject(error);
  });
}


module.exports = {
  sendRequest,
  login,
  createOrUpdateCustomer
};
