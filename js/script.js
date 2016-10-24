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