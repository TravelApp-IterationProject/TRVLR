const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const app = express();

const mongoose = require('mongoose');
const Location = require('./server-mongoose/models/locationModel');
const locationController = require('./server-mongoose/controllers/locationController');
const yelpApi = require('./controllers/yelpApi');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://teamwind:teamwind@ds119585.mlab.com:19585/trvlr');
mongoose.connection.once('open', (err, success) => {
  if (err) console.log('NOOOOOOOO');
  console.log('CONNECTED YAYYYYY');
})

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/query', locationController.findMatches);
app.post('/creating', locationController.create);
app.get('/yelpdata:location', yelpApi.sendYelpReq);


// ------ postgres database 
const pg = require('pg');
const connectionString = 'postgres://feiagvsn:EFHbahERzziHeEeN0kjPv9-5j0vvWUpa@elmer.db.elephantsql.com:5432/feiagvsn';

// user enter username and password and check are they in database
app.post('/api/login', (req, res, next) => {
  let results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if (err) {
      done();
      console.log(err);
      res.status(500).json({ success: false, data: err });
      return;
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM "users";');

    var user = null;
    query.on('row', (row) => {
      if(row.username === req.body.username && bcrypt.compareSync(req.body.password, row.password)) {
        user = row;
      }
    });
    // After all data is returned, close connection and set cookie which will be user_id
    query.on('end', () => {
      done();
      if (user) {
        res.cookie('user_id', user.user_id);
        res.status(200).send();
      } else {
        res.status(401).send();
      }
    });
  });
})

//post request for signup page --- sending created user into db
app.post('/api/signup', (req, res, next) => {
  let results;
  const data = req.body;
  console.log('dataaaa', data);
  pg.connect(connectionString, (err, client, done) => {
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err });
    }

    bcrypt.hash(data.password, 10, function (err, hash) {
      if (err) throw err;
      else {
        client.query('INSERT INTO users (username, password) VALUES ($1, $2);',
          [data.username, hash]);
      }

    });

    const query = client.query('SELECT * FROM "users";');
    query.on('row', (row) => {
      results = row;
    });
    query.on('end', function () {
      done();
      return res.json(results);
    });
  });
});

const server = app.listen(3000, function () {
  const port = server.address().port;
  console.log('listening at port', port);
});