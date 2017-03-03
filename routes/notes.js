var savedNotes = require('../savedNotes.json');
var userJSON = require('../user.json');

exports.viewNotes = function(req, res) { 
	console.log("entered notes routes");
	if(userJSON.date == "") {
		var today = new Date();
		userJSON["date"] = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		console.log("entered new date in notes: " + userJSON.date);
	}
	try {
		console.log(savedNotes[currDate]);
		var currDate = userJSON["date"];
  savedNotes[currDate] = req.query.noted[1];
  console.log(savedNotes);
  res.render('notes', savedNotes);
}
catch(err) {
	res.render('notes', savedNotes);
}
};
