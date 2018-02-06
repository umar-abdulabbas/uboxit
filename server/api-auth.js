const memoryCache = require('memory-cache');
const reqPromise = require('request-promise');

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

function authUser(userName, password) {
  return reqPromise({
    uri: 'http://188.166.82.127:8085/authserver/oauth/token',
    method: 'POST',
    form: {
      'grant_type': 'password',
      'username': userName,
      'password': password

    },
    headers: {
      'Authorization': 'Basic cmVzdGF1cmFudDpyZXN0YXVyYW50c2VjcmV0',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    json: true
  });
}

module.exports.authToken = function (userName, password) {
    const key = !!userName ? userName : 'anonymous';
    const cacheToken = memoryCache.get(key);
    const TOKEN_TIME_TO_LIVE_MARGIN = 1000 * 10;

    if (cacheToken != null) {
      console.log('token from cache');
      return cacheToken;
    }

    // TODO if username & pwd -> authuser, if only username -> refreshtoken, else authtoken
    let requestTokenPromise = !!userName ? authUser(userName, password) : authToken();
    requestTokenPromise.then((token) => {
        memoryCache.put(
            key,
            requestTokenPromise,
            token.expires_in * 1000 - TOKEN_TIME_TO_LIVE_MARGIN,
            (key) => {
                console.log(key + ' Token Expired!');
            });
        return token;
    }).catch((err) => {
        console.log(`Error in fetching Token/Creation ${apiName} with ${err}`);
        memoryCache.del(apiName);
        return Promise.reject(err);
    });

    return requestTokenPromise;
}
