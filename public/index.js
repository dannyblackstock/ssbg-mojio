$(document).ready(function(){
	$.get('/getDanny', function(data) {
    var lastTripDur = data.Data;
    var lastTripVal = lastTripDur[lastTripDur.length - 1].Duration;
    // lastTripVal = Math.round(lastTripVal *10)/10;
    // console.log(lastTripVal);
    lastTripVal = lastTripVal.substring(0, lastTripVal.indexOf('.'));
    // console.log(lastTripVal);


    var lastTripMPG = data.Data/* some array here */;
    var last_element = lastTripMPG[lastTripMPG.length - 1];

    var lastTripLength = data.Data;
    var lastTripKM = lastTripLength[lastTripLength.length - 1].Distance.Value;


    // var totalDriven = data.Data;
    // for (var i = totalDriven.length - 1; i >= 0; i--) {
    //   totalDriven = totalDriven[i] + totalDriven[i+1];
    // }
    // console.log(totalDriven);
    // // var totalDrivenTime = totalDriven[totalDriven].Duration.reduce(add, 0);


    //   console.log(data);
    //  $('body').html(data.UserName);
     // data.Data.forEach( function (arrayItem)
     //  {

     //  });
        // var x = arrayItem.FuelEfficiency.Value;
        // $('#fuelEcoTrips').append();
// var x = arrayItem.FuelEfficiency.Value;
    $('#fuelEcoTrips').append(last_element.FuelEfficiency.Value);
    $('#ltLength').append(lastTripVal);
    $('#ltDistance').append(lastTripKM/1000 );
      });
   // get danny's civic government stats
   $.get('http://www.fueleconomy.gov/ws/rest/vehicle/17554', function(data) {
     $xml = $(data);
     $combined = $xml.find("comb08").text();
     console.log($combined);
     $('body').append('<p>dannys civic combined mpg from govt is: '+$combined+'</p>');
   }, 'xml');

   // get danny's hardcoded data
   $.get('/getDannyStats', function(data) {
     var obj = JSON.parse(data);
     console.log(obj);
  });

  $('#press-josh').click(function() {
    $.get( '/getUser2', function(data) {
      console.log(data);
       $('body').html(data.UserName);
     });

     // get all josh's trips
     $.get( '/getUser2', function(data) {
       console.log(data);
        $('body').html(data.UserName);
    });

    // get josh's jeep government stats
    $.get('http://www.fueleconomy.gov/ws/rest/vehicle/30784', function(data) {
     //  var parsed = $.parseXML(data);
      $xml = $(data);
     //  console.log(data);
      $combined = $xml.find("comb08").text();
      console.log($combined);
      $('body').append('<p>joshs jeep combined mpg from govt is: '+$combined+'</p>');
    }, 'xml');
  });
});
