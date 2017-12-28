var mongoose = require('mongoose');

mongoose.set('degug', true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise;

module.export = require('./todo');
