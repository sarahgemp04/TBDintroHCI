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
    $(".days li").click(dayClicked(this.text));
    console.log(this.text)
}

function dayClicked(day) {
    e.preventDefault();
    console.log(day);
}
