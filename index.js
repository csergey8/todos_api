var express  = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000;
var todoRoutes = require('./routes/todos');

app.get('/', function(req, res) {
  res.send('EXPRESS GET ROOT');
});

app.use('/api/todos', todoRoutes);

app.listen(PORT, function() {
  console.log('app is running on ' + PORT);
});
