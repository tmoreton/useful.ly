// This validates form fields
function getUrl() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

function validateForm(data) {
  if (data.honey !== ""){
    return false;
  } else if (data.name == ""){
    return false;
  } else if (data.email == ""){
    return false;
  } else if (data.message == ""){
    return false;
  } else if (data.sendTo == ""){
    return false;
  } else {
    return true;
  }
}

$('button[type="submit"]').click( function(){
    $('form').addClass('submitted');
});

//Submits form to API Gateway
$("#contact-form").submit(function(e) {
  e.preventDefault();
  var formButton = $(".form-submit");
  var name = $("input[name='name']");
  var email = $("input[name='email']");
  var message = $("textarea[name='message']");
  var honey = $("input[name='honey']");

  var url = 'https://yuaxe94egh.execute-api.us-east-1.amazonaws.com/prod/usefully-contact-form'
  var data = {
    "honey": honey.val(),
    "name": name.val(),
    "email": email.val(),
    "message": message.val(),
    "sendTo": getUrl()["email"]
  }

  formButton.text("Submitting...");
  
  if (validateForm(data)){
    $.ajax({
      type: 'POST',
      url: url,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function (data) {
        formButton.text("Success!");
        formButton.css("background-color", "#14B8B2");
        formButton.css("color", "#fff");
        formButton.attr("disabled", "disabled");
        name.val("");
        name.attr("disabled", "disabled");
        email.val("");
        email.attr("disabled", "disabled");
        message.val("");
        message.attr("disabled", "disabled");
        $('form').removeClass('submitted');
      },
      error: function (data) {
        console.log("Error" + data)
      }
    })
  } else {
    formButton.text("Submit");
  }
});