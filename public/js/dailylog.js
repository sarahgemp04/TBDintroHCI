'use strict';
var isHidden = true;
var href = "";

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	isHidden = true;
	initializePage();

})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	if(!isHidden) {
		$("#calendarAddDiv").css("display", "inline-block");
		$("#calendarAddDiv a").attr("href", href);
		console.log(href);
		console.log($("#calendarAddDiv a").attr("href"));
	} else {
		$("#calendarAddDiv").css("display", "none")
	}

	//$(".days.day").click(dayClicked($(this).attr("id")));
}

function dayClicked(day) {
	
	console.log("Function was called" + day );
	$("#calendarAddDiv").css("display", "inline-block");
	window.href = "bodyMap?id=" + day;

	window.isHidden = false;
	initializePage();
	return false;
}
