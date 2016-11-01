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

// Showing and Hiding mobile nav Overlay
$('#open-close-nav').click( function(){
	if ($("#open-close-nav").hasClass('is-active')){
		$("#open-close-nav").removeClass('is-active');
		$('body').css("overflow", "initial");
		$(".menu").removeClass("open");
	} else {
		$("#open-close-nav").addClass('is-active');
		$('body').css("overflow", "hidden");
		$(".menu").addClass("open");
	}
});

//Close nav when link is clicked
$('a').click(function(){
	$("#open-close-nav").removeClass('is-active');
	$(".menu").removeClass("open");
	$('body').css("overflow", "initial");
})

// Nav Dropwdowns
$(".nav-item").click(function(){
	if ($(this).hasClass("open")){
		$(this).removeClass("open");
	} else {
		$(this).addClass("open");
	}
})