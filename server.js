const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 3000))
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use((req, res) => {
  res.status(404).send('Fix Dis Stuff!');
})

const server = app.listen(app.get('port'), () => {
  console.log(`Connected on port ${server.address().port}`);
});