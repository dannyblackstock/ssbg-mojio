$('#press-me').click(function() {
  $.get( '/getUserName', function(data) {
    console.log(data);
     $('body').html(data.UserName);
   });
});
$('#press-josh').click(function() {
  $.get( '/getUser2', function(data) {
    console.log(data);
     $('body').html(data.UserName);
   });
});

