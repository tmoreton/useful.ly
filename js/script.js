/* Open when someone clicks on the span element */
// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//     document.body.style.overflow = "hidden";
// }

/* Close when someone clicks on the "x" symbol inside the overlay */
// function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
//     document.body.removeAttribute("style");
// }

//Open Modal Function
function openModal(){
	var modal = document.getElementById("modal");
	modal.style.visibility = "visible"
	modal.style.opacity = 1
	document.body.style.overflow = "hidden";
}

//Close Modal Function
function closeModal(){
	var modal = document.getElementById("modal");
	modal.style.visibility = "hidden"
	modal.style.opacity = 0
	document.body.removeAttribute("style");
}

// This validates form fields
$('button[type="submit"]').click( function(){
    $('form').addClass('submitted');
});

// Showing and Hiding mobile nav Overlay
$('.hamburger').click( function(){
	if ($(this).hasClass('is-active')){
		$(this).removeClass('is-active');
		$('#nav').css("width", "0%");
		$('body').css("overflow", "initial");
	} else {
		$(this).addClass('is-active');
		$('#nav').css("width", "100%");
		$('body').css("overflow", "hidden");
	}
});

$('a').click(function(){
	$('#nav').css("width", "0%");
	$('body').css("overflow", "initial");
})

/*Scroll transition to anchor*/
// $("a.toscroll").on('click',function(e) {
//     var url = e.target.href;
//     var hash = url.substring(url.indexOf("#")+1);
//     $('html, body').animate({
//         scrollTop: $('#'+hash).offset().top
//     }, 500);
//     return false;
// });

var URL = 'https://ae2o09afuh.execute-api.us-east-1.amazonaws.com/prod'
 
$('.contact-button').click(function () {
 
  var data = {
    name: "tim Moreton",
    email: "tmoreton89@gmail.com",
    description: "this is a test"
  }
 console.log("its working")
  $.ajax({
    type: 'POST',
    url: URL,
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function () {
      // clear form and show a success message
    },
    error: function () {
      // show an error message
    }
  })
})