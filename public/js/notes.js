
//Notes js
$( document ).ready(function() {
    console.log( "ready!" );
});

$('#saveNote').submit(function(e) {
	e.preventDefault();

	var notes = $('#areaNote').val();

    // Send the POST request
    $.post('addTask', { taskName: taskName }, postCallback);
});