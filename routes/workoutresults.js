exports.viewWorkoutResults = function(req, res) { 
	console.log("req id is: " + req.query.id);
	if(req.query.id == 'neck') {
	res.render('workoutResults', {
		'type' : req.query.id, 
		'workout': [
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
		]});
	}
	else if(req.query.id == 'chest') {
		res.render('workoutResults', {
			'type' : req.query.id, 
		'workout': [
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
		]});
	}
	else if(req.query.id == 'arms') {
		res.render('workoutResults', {
			'type' : req.query.id, 
		'workout': [
		{ 	
			'name': 'Arms Workout 1',
			'video': 'https://www.youtube.com/embed/cF0niVnmMY0',
		},
		{ 	
			'name': 'Arms Workout 2',
			'video': "https://www.youtube.com/embed/zU9ig8oaU6E",
		},
		{ 	
			'name': 'Arms Workout 3',
			'video': "https://www.youtube.com/embed/hAGfBjvIRFI",
		}
		]});
	}
	else if(req.query.id == 'fullBody') {
		res.render('workoutResults', {
			'type' : req.query.id, 
		'workout': [
		{ 	
			'name': 'fullBody Workout 1',
			'video': 'https://www.youtube.com/embed/695PN9xaEhs',
		},
		{ 	
			'name': 'fullBody Workout 2',
			'video': 'https://www.youtube.com/embed/XIeCMhNWFQQ',
		},
		{ 	
			'name': 'fullBody Workout 3',
			'video': 'https://www.youtube.com/embed/zd8pDgK-HhQ',
		}
		]});
	}
	else if(req.query.id == 'shoulders') {
		res.render('workoutResults', {
			'type' : req.query.id, 
		'workout': [
		{ 	
			'name': 'Shoulders Workout 1',
			'video': 'https://www.youtube.com/embed/Ut09ow5T26Q',
		},
		{ 	
			'name': 'Shoulders Workout 2',
			'video': 'https://www.youtube.com/embed/6EqI5V8AUp8',
		},
		{ 	
			'name': 'Shoulders Workout 1',
			'video': 'https://www.youtube.com/embed/yUgFJHp4faA',
		}
		]});
	}
	else if(req.query.id == 'abs') {
		res.render('workoutResults', {
			'type' : req.query.id, 
		'workout': [
		{ 	
			'name': 'Abs Workout 1',
			'video': 'https://www.youtube.com/embed/1919eTCoESo',
		},
		{ 	
			'name': 'Abs Workout 2',
			'video': 'https://www.youtube.com/embed/1919eTCoESo',
		},
		{ 	
			'name': 'Abs Workout 3',
			'video': 'https://www.youtube.com/embed/1919eTCoESo',
		}
		]});
	}
	else if(req.query.id == 'legs') {
		res.render('workoutResults', {
			'type' : req.query.id, 
		'workout': [
		{ 	
			'name': 'Legs Workout 1',
			'video': 'https://www.youtube.com/embed/yGk0_dzpFA0',
		},
		{ 	
			'name': 'Legs Workout 2',
			'video': 'https://www.youtube.com/embed/yGk0_dzpFA0',
		},
		{ 	
			'name': 'Legs Workout 3',
			'video': 'https://www.youtube.com/embed/yGk0_dzpFA0',
		}
		]});
	}
};