
$('document').ready(function() {

  // get all danny's trips
  $.get( '/getDanny', function(data) {
      console.log(data);
      data.Data.forEach( function (arrayItem) {
        var x = arrayItem.FuelEfficiency.Value;
        $('body').append('<li>'+x+'</li>');
      });
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
