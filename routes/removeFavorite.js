var savedFavorites = require('../savedFavorites.json');

exports.remove = function(req, res) { 
	console.log("Trying to remove: " + req.query.id);
	var vidRemove = req.query.id;

	for(var i = 0; i < savedFavorites.length; i++) {
    	if(savedFavorites[i] == req.query.id) {
    		console.log("found it and trying to remove");
    		delete savedFavorites[i]['video'];
    	}
	}
	console.log(savedFavorites);
};
