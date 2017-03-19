$(document).ready(function(){
  $.get( '/getUserName', function(data) {
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


});

$('#press-josh').click(function() {
  $.get( '/getUser2', function(data) {
    console.log(data);
     $('body').html(data.UserName);
   });
});
