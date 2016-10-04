const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const MONGO_URL = 'mongodb://localhost/styles-for-hue';
mongoose.connect(MONGO_URL);

const stylesSchema = mongoose.Schema({
  data: Object
});

const Style = mongoose.model('Style', stylesSchema);

app.set('port', (process.env.PORT || 3000))

// CORS //
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/styles', (req, res) => {
  Style.find({})
  .then(results => res.json(results[0]));
});

app.post('/update', (req, res) => {
  console.log('post', req.body.fontFamily);
  console.log('req.body', req.body.backgroundColor);
  Style.create({
    data: {
      backgroundColor: req.body.backgroundColor,
      fontFamily: req.body.fontFamily
    }
  })
  .then(results => res.json(results));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use((req, res) => {
  console.log(req);
  res.status(404).send('Fix Dis Stuff!');
})

mongoose.connection.once('open', function (){
  const server = app.listen(app.get('port'), () => {
    console.log(`Connected on port ${server.address().port}`);
  });
});