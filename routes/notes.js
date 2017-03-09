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
		var currDate = userJSON["date"];
		savedNotes[currDate] = req.query.noted[0];
		console.log("save data is:" + req.query.noted[0]);
		savedNotes['date'] = currDate;
		console.log("finished try");
		console.log("savedNotes is: " + JSON.stringify(savedNotes));
		res.render('notes', savedNotes);
	}
	catch(err) {
		console.log("entered catch");
		savedNotes['date'] = userJSON["date"];
		console.log("savedNotes is: " + JSON.stringify(savedNotes));
		res.render('notes', savedNotes);
	}
};
