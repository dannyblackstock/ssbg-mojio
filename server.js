// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');
var Promise = require('es6-promise').Promise;

var express = require('express');
var fs = require('fs')
var MojioClientLite= require("mojio-client-lite");
var app = express();

app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.get('/', function (req, res) {
  res.render('pages/index');
});

// use res.render to load up an ejs view file
app.get('/getDanny', function (req, res) {
  var config = {
      application: '231e02f3-c70f-49e4-a021-bb8e77378cc4',
      secret:'6d972ed3-28d3-4f1b-a6c2-c1838954e566'
  };

  var mojio_client = new MojioClientLite(config);
  var data;

  // No authorized user, redirect to Mojio authentication server.
  mojio_client.authorize('dannyblackstock','Demo1234').then(function(response,error1){

      if(typeof(err)!="undefined")
      {
          console.log("login error");
          return;
      }

      // login successful
      // write your logic here
      console.log('success');
      mojio_client.getPath('/v2/trips/').then(function(result, error) {
          console.log(result);
          data = result;
          // data = result;
          var m = JSON.parse(fs.readFileSync('public/database.json').toString());
          m[0].NumberOfTrips = result.Data.length;
          fs.writeFile('public/database.json', JSON.stringify(m));
          res.send(result);
      });
  })

  // res.send(data);
});

app.get('/getUser2', function (req, res) {
  var config = {
      application: 'c1616a16-9cd1-4b8a-9201-5fd6dcfe68a2',
      secret:'34ce1d9d-6251-4652-8539-5ffc5be3d0d7'
  };

  var mojio_client = new MojioClientLite(config);
  var data;

  // No authorized user, redirect to Mojio authentication server.
  mojio_client.authorize('joshcheng','ssbg123').then(function(response,error1){

      if(typeof(err)!="undefined")
      {
          console.log("login error");
          return;
      }

      // login successful
      // write your logic here
      console.log('success');
      mojio_client.getPath('/v2/trips/{94cd834d-57eb-48df-b0fc-d7584e8cfb11}').then(function(result, error) {
          console.log(result);
          res.send(result);
      });
  })

  // res.send(data);
});

app.get('/getDannyStats', function(req, res) {
  fs.readFile('public/database.json', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    res.send(data);
    console.log(data);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
