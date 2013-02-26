var express = require('express');

var app = express()

app.set('title','Ergo Design');

app.use(express.static(__dirname + '/app/public'));
app.use(express.logger());
app.get('/', function(request, response) {
  response.sendfile("app/index.html");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
