var yourlist = require("../yourList.json");

exports.viewWorkoutList = function(req, res) { 

	    var workouts = JSON.parse(JSON.stringify(yourlist.workouts));
	    		console.log(workouts);
	    var bool = yourlist["dropdown"];
	    

 		console.log("This is the video dictionary you're looping through", workouts);
		res.render('yourlist', {
			'workout': workouts,
			'dropdown': bool
		});

		//ga("send", "event", 'dropdown', 'click');


};
