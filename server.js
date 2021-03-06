var express = require('express');
var path = require('path');
var app = express();
app.use(express.static('./public'))

app.get('*', function(req, res){
  var head = req.headers;
	var user = head['user-agent'];
	var os = user.substring(user.indexOf("(")+1, user.indexOf(")"));

  var response = {
    "ip": head['x-forwarded-for'] || req.connection.remoteAddress,
    "language": head['accept-language'].split(",").slice(0,1)[0],
    "operating system": os
  }
  res.json(response);
})



var server = app.listen(process.env.PORT || 3000, function(){
  console.log('App listening on port 3000')
})
