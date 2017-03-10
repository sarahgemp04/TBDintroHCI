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
    $("#yourlistbtn").click(existingClicked);
}

function existingClicked() {
	console.log("existing clicked");
    ga("send", "event", 'dropdown', 'click');
}

