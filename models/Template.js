const mongoose = require('mongoose');

// CREATE SCHEMA & MODEL FOR 'themes' COLLECTION //
const templateSchema = mongoose.Schema({
  data: Object
});
// mongoose will lowercase and pluralize for mongodb //
const Template = mongoose.model('Template', templateSchema);

module.exports = Template;