const mongoose = require('mongoose');

// CREATE SCHEMA & MODEL FOR 'themes' COLLECTION //
const themeSchema = mongoose.Schema({
  data: Object
});
// mongoose will lowercase and pluralize for mongodb //
const Theme = mongoose.model('Theme', themeSchema);

module.exports = Theme;