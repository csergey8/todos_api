var express  = require('express');
  app = express();

var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('EXPRESS GET ROOT');
});

app.listen(PORT, function() {
  console.log('app is running on ' + PORT);
});
