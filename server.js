var express = require('express');
var path = require('path');
app.use(express.static('./public'))

var server = app.listen(process.env.PORT || 3000, function(){
  console.log('App listening on port 3000')
})
