const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const CONFIG = require('./config.json');
const models = require('./models'); //MongoDB models

// SET UP CONNECTION TO MONGO DATABASE //
mongoose.connect(CONFIG.MONGO_URI);
// CHECK MONGODB CONNECTION ONCE MONGOOSE CONNECTS //
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function(){
  console.log("Connected to MongoDB");
});

// CREATE SCHEMA & MODEL FOR 'styles' COLLECTION //
const Schema = mongoose.Schema;
const stylesSchema = new Schema({
  doc: {
    _id: String,
    elements: {
      divTags: [{
        elementId: Number,
        style: {
          backgroundColor: String,
          fontFamily: String,
          display: String,
          color: String
        }
      }],
      pTags: [{
        elementId: Number,
        style: {
          backgroundColor: String,
          fontFamily: String,
          display: String,
          color: String
        }
      }],
      imgTags: [{
        elementId: Number,
        src: String,
        style: {
          backgroundColor: String,
          width: String,
          height: String,
          display: String,
        }
      }],
      ulTags: [{
        elementId: Number,
        style: {
          backgroundColor: String,
          fontFamily: String,
          display: String,
          color: String
        }
      }]
    }
  }
});
// mongoose will lowercase and pluralize for mongodb //
const Style = mongoose.model('Style', stylesSchema);

app.set('port', (process.env.PORT || 3000))

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/styles', (req, res) => {
  Style.find({})
  .then(results => res.json(results));
});

app.post('/update', (req, res) => {
  Style.create({
    doc: req.body.doc,
  })
  .then(results => res.json(results))
  .catch(err => res.json(err));
});

app.get('/update/:id', (req, res) => {
  Style.where({_id: req.params.id}).findOne()
  .then(results => res.json(results));
  });

app.put('/update/:id', (req, res) => {
  console.log('req: ', req.body);
  // Style.where({_id: req.params.id}).update({doc: req.body.doc})
  // .then(results => res.json(results));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use((req, res) => {
  console.log(req);
  res.status(404).send('Fix Dis Stuff!');
})

const server = app.listen(app.get('port'), () => {
  console.log(`Connected on port ${server.address().port}`);
});

module.exports = Style;