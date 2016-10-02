const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const MONGO_URL = 'mongodb://localhost/styles-for-hue';
mongoose.connect(MONGO_URL);

const stylesSchema = mongoose.Schema({
  data: {}
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

app.get('/api/styles', (req, res) => {
  Style.find({})
  .then(results => res.json(results[0]));
});

app.post('/update', function(req, res){
  console.log('post', req.body);
  // Style.save({
  //   'background-color': req.body
  // })
  // .then(results => res.json(results));
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