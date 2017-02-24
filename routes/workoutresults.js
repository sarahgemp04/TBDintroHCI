var workouts = require('../workouts.json');

exports.viewWorkoutResults = function(req, res) { 
	console.log("req id is: " + req.query.id);

	if(req.query.id == 'Neck') {	
		var neckWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Neck));
 		console.log(JSON.stringify(neckWorkouts));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': neckWorkouts
			/*[
			{ 	
				'name': 'Neck Workout 1',
				'video': 'https://www.youtube.com/embed/mVYB9yps4ow',
			},
			{ 	
				'name': 'Neck Workout 2',
				'video': 'https://www.youtube.com/embed/r53k_Z2sydI',
			},
			{ 	
				'name': 'Neck Workout 3',
				'video': 'https://www.youtube.com/embed/YPiqpLtQbvc',
			}
			]*/
		});
	}
	else if(req.query.id == 'Chest') {
		var chestWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Chest));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': chestWorkouts
			/*[
			{ 	
				'name': 'Chest Workout 1',
				'video': 'https://www.youtube.com/embed/DUVv_feH7z0',
			},
			{ 	
				'name': 'Chest Workout 2',
				'video': 'https://www.youtube.com/embed/IPvVRFcGIBs',
			},
			{ 	
				'name': 'Chest Workout 3',
				'video': 'https://www.youtube.com/embed/2uJqvaXAexc',
			}
			]*/
		});
	}
	else if(req.query.id == 'Arms') {
		var armWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Arms));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': armWorkouts
			/*[
			{ 	
				'name': 'Chest Workout 1',
				'video': 'https://www.youtube.com/embed/DUVv_feH7z0',
			},
			{ 	
				'name': 'Chest Workout 2',
				'video': 'https://www.youtube.com/embed/IPvVRFcGIBs',
			},
			{ 	
				'name': 'Chest Workout 3',
				'video': 'https://www.youtube.com/embed/2uJqvaXAexc',
			}
			]*/
		});
	}
	else if(req.query.id == 'FullBody') {
		var fullBodyWorkouts = JSON.parse(JSON.stringify(workouts.workouts.FullBody));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': fullBodyWorkouts
			/*[
			{ 	
				'name': 'Chest Workout 1',
				'video': 'https://www.youtube.com/embed/DUVv_feH7z0',
			},
			{ 	
				'name': 'Chest Workout 2',
				'video': 'https://www.youtube.com/embed/IPvVRFcGIBs',
			},
			{ 	
				'name': 'Chest Workout 3',
				'video': 'https://www.youtube.com/embed/2uJqvaXAexc',
			}
			]*/
		});
	}
	else if(req.query.id == 'Shoulders') {
		var shoulderWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Shoulders));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': shoulderWorkouts
			/*[
			{ 	
				'name': 'Chest Workout 1',
				'video': 'https://www.youtube.com/embed/DUVv_feH7z0',
			},
			{ 	
				'name': 'Chest Workout 2',
				'video': 'https://www.youtube.com/embed/IPvVRFcGIBs',
			},
			{ 	
				'name': 'Chest Workout 3',
				'video': 'https://www.youtube.com/embed/2uJqvaXAexc',
			}
			]*/
		});
	}
	else if(req.query.id == 'Abs') {
		var abWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Abs));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': abWorkouts
			/*[
			{ 	
				'name': 'Chest Workout 1',
				'video': 'https://www.youtube.com/embed/DUVv_feH7z0',
			},
			{ 	
				'name': 'Chest Workout 2',
				'video': 'https://www.youtube.com/embed/IPvVRFcGIBs',
			},
			{ 	
				'name': 'Chest Workout 3',
				'video': 'https://www.youtube.com/embed/2uJqvaXAexc',
			}
			]*/
		});
	}
	else if(req.query.id == 'Legs') {
		var legWorkouts = JSON.parse(JSON.stringify(workouts.workouts.Legs));
		res.render('workoutResults', {
			'type' : req.query.id, 
			'workout': legWorkouts
			/*[
			{ 	
				'name': 'Chest Workout 1',
				'video': 'https://www.youtube.com/embed/DUVv_feH7z0',
			},
			{ 	
				'name': 'Chest Workout 2',
				'video': 'https://www.youtube.com/embed/IPvVRFcGIBs',
			},
			{ 	
				'name': 'Chest Workout 3',
				'video': 'https://www.youtube.com/embed/2uJqvaXAexc',
			}
			]*/
		});
	}
};