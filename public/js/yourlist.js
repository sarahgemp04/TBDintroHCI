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
		console.log(this.parentElement.childNodes[2]);
				console.log(this.parentElement.childNodes[3]);
		console.log(this.parentElement.childNodes[4]);
		console.log(this.parentElement.childNodes[5]);
		console.log(this.parentElement.childNodes[1]);

	var drop = this.parentElement.childNodes[3];
	if(drop.style.display == "none") {
		drop.style.display = "inline-block"
	} else {
		drop.style.display = "none";
	}


	//console.log("made it");
}
