// This validates form fields
$('button[type="submit"]').click( function(){
    $('form').addClass('submitted');
});

//Submits form to API Gateway
$("#contact-form").submit(function(e) {
  $(".form-submit").text("Submitting...");
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
      $("input[name='name']").val("");
      $("input[name='email']").val("");
      $("textarea[name='message']").val("");
      $('form').removeClass('submitted');
      $("input[name='name']").attr("disabled", "disabled");
      $("input[name='email']").attr("disabled", "disabled");
      $("textarea[name='message']").attr("disabled", "disabled");
      $(".form-submit").attr("disabled", "disabled");
    },
    error: function (data) {
      console.log("Error" + data)
    }
  })
});