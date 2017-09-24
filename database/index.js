var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connnnnected')

});
var repoSchema 
var Repo = mongoo= mongoose.Schema({
  // TODO: your schema here!
  user_name:String,
  repos:String


  
});
se.model('Repo', repoSchema);

module.exports = Repo;