const express = require('express');
const router = express.Router();

const apiRequest = require('./api-request');

router.get('/test', (req, res) => {
  console.log(req.query.input);
  res.status(200).json('wow');
});


router.get('/offer', (req, res) => {
  apiRequest.sendRequest(req)
    .then(apiResponse => {
      res.json(Object.assign({}, apiResponse.body));
    });
});


module.exports = router;
