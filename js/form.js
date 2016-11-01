// This validates form fields
$('button[type="submit"]').click( function(){
    $('form').addClass('submitted');
});

//Submits form to API Gateway
$("#contact-form").submit(function(e) {
	e.preventDefault();
  var url = 'https://ycwfh8vkck.execute-api.us-east-1.amazonaws.com/prod/test'
	var data = JSON.stringify({
	  "name": $("input[name='name']").val(),
	  "email": $("input[name='email']").val(),
	  "message": $("textarea[name='message']").val()
	})
  $.ajax({
    type: 'POST',
    url: url,
    dataType: 'json',
    contentType: 'application/json',
    data: data,
    success: function (data) {
      $(".form-submit").text("Success!");
      $(".form-submit").css("background-color", "#14B8B2");
      $(".form-submit").css("color", "#fff");
    },
    error: function (data) {
      console.log("Error" + data)
    }
  })
});