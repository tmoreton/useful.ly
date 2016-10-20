// This validates form fields
$('button[type="submit"]').click( function(){
    $('form').addClass('submitted');
});

//Open Modal Function
function openModal(){
	var modal = document.getElementById("modal");
	modal.style.visibility = "visible"
	modal.style.opacity = 1
	document.body.style.overflow = "hidden"
}

//Close Modal Function
function closeModal(){
	var modal = document.getElementById("modal");
	modal.style.visibility = "hidden"
	modal.style.opacity = 0
	document.body.removeAttribute("style")
}