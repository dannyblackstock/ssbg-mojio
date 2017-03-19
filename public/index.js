$('#press-me').click(function() {
  $.get( '/getUserName', function(data) {
    console.log(data);
     $('body').html(data.UserName);
   });
});
