const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const apiRequest = require('./server/api-request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })) ;

// Run the app by serving the static files in the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

app.all('/customer-api/*', (req, res) => {
  console.log(req.url);
  if (!!req.body.username && !!req.body.password) {
    apiRequest.login(req).then(apiResponse => {
      res.json(Object.assign({}, apiResponse.body));
    }).catch(err => {
      res.status(err.statusCode).json(err.error);
    });
  } else {
    apiRequest.createOrUpdateCustomer(req).then(apiResponse => {
      res.json(Object.assign({}, apiResponse.body));
    });
  }
});

app.all('/:resource/*', (req, res) => {
  console.log(req.url);
  apiRequest.sendRequest(req, req.url)
    .then(apiResponse => {
    res.json(apiResponse.body);
  });
});


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8081, () => console.log(`APP running in 8081`));
