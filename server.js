'use strict'
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const shortid = require('shortid');
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
const docSchema = new Schema({
  _id: {type: String, 'default': shortid.generate},
  doc: Object
});

const stylesSchema = new Schema({
  style: Object
});

const UserTemplateSchema = new Schema({
  _id: {type: String, 'default': shortid.generate},
  template: {
    elements: [{
      _id: String,
      elementId: Number,
      tag: String,
      className: String,
      src: String,
      style: {
        backgroundColor: String,
        fontFamily: String,
        color: String,
        display: String,
        width: String,
        height: String
      },
      children: Object
    }]
  }
});

// mongoose will lowercase and pluralize for mongodb //
let Doc = mongoose.model('Doc', docSchema, 'docs');
let Style = mongoose.model('Style', stylesSchema, 'styles');
let UserTemplate = mongoose.model('UserTemplate', UserTemplateSchema, 'usertemplates');

app.set('port', (process.env.PORT || 3000))

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/usertemplate', (req, res) => {
  UserTemplate.find({})
  .then(results => res.send(results));
});

app.post('/api/usertemplate', (req, res) => {
  console.log('req body', req.body.template);
  UserTemplate.create({
    template: req.body.template,
  })
  .then(results => res.json(results))
  .catch(err => res.send(err));
});

app.get('/api/docs', (req, res) => {
  Doc.find({})
  .then(results => res.send(results));
});

app.post('/api/docs', (req, res) => {
  Doc.create({
    doc: req.body.doc,
  })
  .then(results => res.json(results))
  .catch(err => res.send(err));
});

app.get('/template/:id', (req, res) => {
  let id = mongoose.Types.ObjectId;
  UserTemplate.findOne({_id: req.params.id})
  .exec((error, results) => {res.send(results);
  });
});

app.put('/template/:id', (req, res) => {
  let id = req.body.doc._id;
  let numbers = shortid.generate(id);
  UserTemplate.findOneAndUpdate(numbers, {template: req.body.template}, () => {
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

module.exports = {Doc, Style};