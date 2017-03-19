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
var request = require('request');
var parser = require('xml2json');

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
      // For each user
      mojio_client.getPath('/v2/trips/').then(function(result, error) {
          // 1. get all mojio trips
          // 2. get all government info

          // For each mojio trip fuel efficiency val, compare to the government value

          // return all the users with their points and trips
          // console.log(result);
          data = result;
          var databaseInfo = JSON.parse(fs.readFileSync('public/database.json').toString());
          databaseInfo[0].NumberOfTrips = result.Data.length;
          fs.writeFile('public/database.json', JSON.stringify(databaseInfo));

          // get danny's civic government stats
          request('http://www.fueleconomy.gov/ws/rest/vehicle/' + databaseInfo[0].VehicleId, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              // console.log(body) // Print the body of response.
              // xml to json
              var json = parser.toJson(body);
              json = JSON.parse(json)
              console.log('json:' + json); // Print the body of response.

              var govtMpg = json.vehicle.comb08;
              // console.log('govt combined mpg:' + govtMpg); // Print the body of response.
              var dannyPoints = 0;
              result.Data.forEach(function(element) {
                console.log(element);
                var difference = (element.FuelEfficiency.Value*2.352146) - govtMpg;
                if (difference > 0) {
                  // add the points together
                  // write to the backend
                  console.log('govt combined mpg:' + govtMpg)
                  console.log((element.FuelEfficiency.Value*2.352146) + 'mpg, great trip!');
                  dannyPoints += difference;
                } else {
                  console.log('govt combined mpg:' + govtMpg)
                  console.log((element.FuelEfficiency.Value*2.352146) + 'mpg, bad/ok trip!');
                }
              });

              var databaseInfo = JSON.parse(fs.readFileSync('public/database.json').toString());
              databaseInfo[0].Points = dannyPoints;
              // add the database info to the return request
              data.databaseInfo = databaseInfo[0];
              fs.writeFile('public/database.json', JSON.stringify(databaseInfo));
              res.send(data);
            }
          });
      });
  })

  // res.send(data);
});
// 
// app.get('/getUser2', function (req, res) {
//   var config = {
//       application: 'c1616a16-9cd1-4b8a-9201-5fd6dcfe68a2',
//       secret:'34ce1d9d-6251-4652-8539-5ffc5be3d0d7'
//   };
//
//   var mojio_client = new MojioClientLite(config);
//   var data;
//
//   // No authorized user, redirect to Mojio authentication server.
//   mojio_client.authorize('joshcheng','ssbg123').then(function(response,error1){
//
//       if(typeof(err)!="undefined")
//       {
//           console.log("login error");
//           return;
//       }
//
//       // login successful
//       // write your logic here
//       console.log('success');
//       mojio_client.getPath('/v2/trips/{94cd834d-57eb-48df-b0fc-d7584e8cfb11}').then(function(result, error) {
//           // console.log(result);
//           res.send(result);
//       });
//   })
//
//   // res.send(data);
// });

// use res.render to load up an ejs view file
app.get('/getJosh', function (req, res) {
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
      // For each user
      mojio_client.getPath('/v2/trips/').then(function(result, error) {
          // 1. get all mojio trips
          // 2. get all government info

          // For each mojio trip fuel efficiency val, compare to the government value

          // return all the users with their points and trips
          // console.log(result);
          data = result;
          var databaseInfo = JSON.parse(fs.readFileSync('public/database.json').toString());
          databaseInfo[1].NumberOfTrips = result.Data.length;
          fs.writeFile('public/database.json', JSON.stringify(databaseInfo));

          // get danny's civic government stats
          request('http://www.fueleconomy.gov/ws/rest/vehicle/' + databaseInfo[1].VehicleId, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              // console.log(body) // Print the body of response.
              // xml to json
              var json = parser.toJson(body);
              json = JSON.parse(json)
              console.log('json:' + json); // Print the body of response.

              var govtMpg = json.vehicle.comb08;
              // console.log('govt combined mpg:' + govtMpg); // Print the body of response.
              var joshPoints = 0;
              result.Data.forEach(function(element) {
                console.log(element);
                var difference = (element.FuelEfficiency.Value*2.352146) - govtMpg;
                if (difference > 0) {
                  // add the points together
                  // write to the backend
                  console.log('govt combined mpg:' + govtMpg)
                  console.log((element.FuelEfficiency.Value*2.352146) + 'mpg, great trip!');
                  joshPoints += difference;
                } else {
                  console.log('govt combined mpg:' + govtMpg)
                  console.log((element.FuelEfficiency.Value*2.352146) + 'mpg, bad/ok trip!');
                }
              });

              var databaseInfo = JSON.parse(fs.readFileSync('public/database.json').toString());
              databaseInfo[1].Points = joshPoints;
              // add the database info to the return request
              data.databaseInfo = databaseInfo[1];
              fs.writeFile('public/database.json', JSON.stringify(databaseInfo));
              res.send(data);
            }
          });
      });
  })

  // res.send(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
