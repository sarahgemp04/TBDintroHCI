var yourlist = require("../yourList.json");

exports.viewWorkoutList = function(req, res) { 
	    var videoDict = JSON.parse(JSON.stringify(yourlist));
 		console.log("This is the video dictionary you're looping through",videoDict);
		res.render('yourlist', videoDict);
};
