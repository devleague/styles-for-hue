'use strict'
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
    divTags: [{
      _id: String,
      elementId: Number,
      style: {
        backgroundColor: String,
        fontFamily: String,
        display: String
      },
      subType: Object
    }],
    pTags: [{
      _id: String,
      elementId: Number,
      style: {
        backgroundColor: String,
        fontFamily: String,
        display: String
      },
      subType: Object
    }],
    imgTags: [{
      _id: String,
      elementId: Number,
      style: {
        backgroundColor: String,
        fontFamily: String,
        display: String
      },
      subType: Object
    }],
    ulTags: [{
      _id: String,
      elementId: Number,
      style: {
        backgroundColor: String,
        fontFamily: String,
        display: String
      },
      subType: Object
    }],
  }
});

// mongoose will lowercase and pluralize for mongodb //
let Style = mongoose.model('Style', stylesSchema);

app.set('port', (process.env.PORT || 3000))

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/styles', (req, res) => {
  Style.find({})
  .then(results => res.json(results));
});

app.post('/api/styles', (req, res) => {
  Style.create({
    doc: req.body.doc,
  })
  .then(results => res.json(results))
  .catch(err => res.json(err));
});

app.get('/update/new/:id', (req, res) => {
  console.log('req: ', req.params.id);
  let id = mongoose.Types.ObjectId;
  Style.findOne({_id: req.params.id})
    // .populate('divTags')
    // .populate('pTags')
    // .populate('imgTags')
    // .populate('ulTags')
    .exec(function(error, results){
      console.log(JSON.stringify(results, null, "\t"))
      res.json(results);
    })
});

app.post('/update/new/:id', (req, res) => {
  let id = mongoose.Types.ObjectId;
  Style.findOne({_id: req.params.id})
  .exec((error, results) => {res.json(results);
  });
});

app.put('/update/new/:id', (req, res) => {
  let id = req.body.doc._id;
  Style.findOneAndUpdate(id, {doc: req.body.doc}, () => {
  });
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