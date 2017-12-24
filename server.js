const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const api = require('./server/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Run the app by serving the static files in the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8085, () => console.log(`APP running`));
