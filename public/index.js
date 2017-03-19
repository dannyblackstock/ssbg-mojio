$('#press-me').click(function() {
  $.get( '/getUserName', function(data) {
    // console.log(data);
    //  $('body').html(data.UserName);
     data.Data.forEach( function (arrayItem)
      {
          var x = arrayItem.FuelEfficiency.Value;
          $('body').append('<li>'+x+'</li>');
      });
   });
});
