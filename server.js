const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 4567))
app.use('/', express.static(path.join(__dirname, 'public')));


app.use((req, res) => {
  res.status(404).send('Fix Dis Stuff!');
})

const server = app.listen(4567, () => {
  console.log(`Connected on port ${server.address().port}`);
});