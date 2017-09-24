var express = require('express');
var http=require('http')
var db=require('../database')
var request = require('request')
var app = express();
var bodyparser=require('body-parser')
var urlencodedParser = bodyparser.urlencoded({ extended: false })
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())
var fs = require('fs');
//app.use(express.bodyParser());
app.post('/repos/import',urlencodedParser, function (req, res) {
  // TODO
  var options = {
  url:'https://api.github.com/users/'+req.body.username+'/repos',
  method:'GET',
  headers: {
    'User-Agent': 'hhhhhhhhh',
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8'
  }
 };
  request(options,function(error, response, body){
  		console.log('//////////////////////////')
  		var x=JSON.parse(body)
/*
	the array==> full_name ==> kamellababidi/Prep_proj
	don't forget parse
	i want to send it to database
	i want to split the x with ('/') 
	https://api.github.com/users/<user>/repos/?access_token=<auth_token>
*/
/////////////////////database////////////the db here is the same Repo in database file
  for(var i=0;i<x.length;i++){
  		x[i]=x[i].full_name.split('/')
  		//console.log(x[i][0]+":"+x[i][1])
  	    var record = new db({ user_name: x[i][0], repos:x[i][1]});
  	    record.save(function (err, result) {
        if (err) return console.error(err);
        console.log('here inside save :' +result)
        }); 

  }
///////////////////

  		res.send(JSON.stringify(x.length));
  })
  //res.send();
});
app.get('/repos', function (req, res) {
  // TODO
  db.find({}, function(error, collections) {
  if (error) {
    return handleError(error);
  }
  console.log(collections);
  var str='';
  for(var i=0;i<collections.length;i++){
  	str=str+collections[i].user_name+":"+collections[i].repos+'<br />';
  }
  console.log(str)
  res.send(str);
   // prints "Ian Fleming"
});

//send the repos from database to page as render
//res.send()
//res.sendFile(__dirname+'/repos.html')

});

var port = 8000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);

});

// var t=document.getElementById("app2");
// console.log(t);

//3b0fc71f6e7b6fb4b6235b5e1db52bd56654d8ed
//request(options, callback);