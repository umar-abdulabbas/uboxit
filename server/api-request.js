const reqPromise = require('request-promise');

function getHeaders(reqHeaders, token) {
  if (token) {
    reqHeaders['authorization'] = 'Bearer ' + token.access_token;
    reqHeaders['Accept'] = 'application/json';
  }
  return reqHeaders;
}

function authToken() {
  return reqPromise({
    uri: 'http://188.166.82.127:8085/authserver/oauth/token',
    method: 'POST',
    form: {
      'grant_type': 'client_credentials'
    },
    headers: {
      'Authorization': 'Basic cmVzdGF1cmFudDpyZXN0YXVyYW50c2VjcmV0',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    json: true
  });
}

function sendRequest(req) {
  return authToken()
    .then((token) => {
      return reqPromise({
        uri: 'http://188.166.82.127:8085/offer-api/offer',
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


module.exports = {
  sendRequest
};
