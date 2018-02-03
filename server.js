const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const apiRequest = require('./server/api-request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Run the app by serving the static files in the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

app.all('/:resource/*', (req, res) => {
  console.log(req.url);
  apiRequest.sendRequest(req, req.url)
    .then(apiResponse => {
    res.json(Object.assign({}, apiResponse.body));
  });
});


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8085, () => console.log(`APP running`));
