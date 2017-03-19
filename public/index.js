$(document).ready(function(){
	$.get('/getDanny', function(data) {
    console.log(data);
    // var lastTripDur = data.Data;
    // var lastTripVal = lastTripDur[lastTripDur.length - 1].Duration;
    // // lastTripVal = Math.round(lastTripVal *10)/10;
    // // console.log(lastTripVal);
    // lastTripVal = lastTripVal.substring(0, lastTripVal.indexOf('.'));
    // // console.log(lastTripVal);
    //
    //
    // var lastTripMPG = data.Data/* some array here */;
    // var last_element = lastTripMPG[lastTripMPG.length - 1];
    //
    // var lastTripLength = data.Data;
    // var lastTripKM = lastTripLength[lastTripLength.length - 1].Distance.Value;
    //
    // $('#fuelEcoTrips').append(last_element.FuelEfficiency.Value);
    // $('#ltLength').append(lastTripVal);
    // $('#ltDistance').append(lastTripKM/1000 );
  });
  $.get('/getJosh', function(data) {
    console.log(data);
  });
   // get danny's civic government stats
  //  $.get('http://www.fueleconomy.gov/ws/rest/vehicle/17554', function(data) {
  //    $xml = $(data);
  //    $combined = $xml.find("comb08").text();
  //    console.log($combined);
  //    $('body').append('<p>dannys civic combined mpg from govt is: '+$combined+'</p>');
  //  }, 'xml');


  // $('#press-josh').click(function() {
    // $.get( '/getUser2', function(data) {
    //   console.log(data);
    //    $('body').html(data.UserName);
    //  });
    //
    //  // get all josh's trips
    //  $.get( '/getUser2', function(data) {
    //    console.log(data);
    //     $('body').html(data.UserName);
    // });

    // get josh's jeep government stats
    // $.get('http://www.fueleconomy.gov/ws/rest/vehicle/30784', function(data) {
    //  //  var parsed = $.parseXML(data);
    //   $xml = $(data);
    //  //  console.log(data);
    //   $combined = $xml.find("comb08").text();
    //   console.log($combined);
    //   $('body').append('<p>joshs jeep combined mpg from govt is: '+$combined+'</p>');
    // }, 'xml');
  // });
});
