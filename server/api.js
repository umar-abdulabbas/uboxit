const express = require('express');
const router = express.Router();

const apiRequest = require('./api-request');

router.get('/test', (req, res) => {
  console.log(req.query.input);
  res.status(200).json('wow');
});


router.all('/offer', (req, res) => {
  apiRequest.sendRequest(req, '/offer-api/offer')
    .then(apiResponse => {
      res.json(Object.assign({}, apiResponse.body));
    });
});

router.all('/shop', (req, res) => {
  apiRequest.sendRequest(req, '/shop-api/shop')
    .then(apiResponse => {
      res.json(Object.assign({}, apiResponse.body));
    });
});


module.exports = router;
