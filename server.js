// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');

var express = require('express');
var MojioClientLite= require("mojio-client-lite");
var app = express();

app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.get('/', function (req, res) {

  // var config = {
  //     application: '231e02f3-c70f-49e4-a021-bb8e77378cc4',
  //     secret:'6d972ed3-28d3-4f1b-a6c2-c1838954e566'
  // };
  //
  // var mojio_client = new MojioClientLite(config);
  // var data;
  // if (mojio_client.token())
    // {
        // alert("Authorization Successful.");
        // Here you can call API calls for authorized user
        // console.log('success');
    // }
    // else
    // {
        // No authorized user, redirect to Mojio authentication server.
        // mojio_client.authorize('dannyblackstock','Demo1234').then(function(res,err){
        //
        //     if(typeof(err)!="undefined")
        //     {
        //         console.log("login error");
        //         return;
        //     }

            // login successful
            // write your logic here
            // alert('success!!');
            // $('body').append(data);
        //     console.log('success');
        //     data = mojio_client.get().me().then(function(result) {
        //         // result = initResolve
        //         // return Promise.resolve("secondPromise");
        //         console.log(result);
        //     });
        // })
    // }

  // res.send('Hello World!');
  // res.send(data);
  res.render('pages/index');
  // res.render('pages/index', {
  //       username: data.UserName
  //   });
});

// use res.render to load up an ejs view file
app.get('/getUserName', function (req, res) {
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
          res.send(result);
      });
  })

  // res.send(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
