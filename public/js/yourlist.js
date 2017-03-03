'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$(".dropTitle").click(dropClicked);
}

function dropClicked() {
	console.log("inside dropClicked");
		console.log(this.parentElement.childNodes[3]);
	var drop = this.parentElement.childNodes[3];
	if(drop.style.visibility == "hidden") {
		drop.style.visibility = "visible"
	} else {
		drop.style.visibility = "hidden";
	}


	//console.log("made it");
}
