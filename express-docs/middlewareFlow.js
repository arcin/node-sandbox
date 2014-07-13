var express = require('express'),
    app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next){
  console.log("http: ", req.method, req.url);
  next();
});

app.use(function(req, res, next){
  next();
});

app.get('/', function(req, res){
  res.send('Hello Charles');
});

app.listen(app.get('port'), function(){
  console.log('listening on port ' + app.get('port'));
});