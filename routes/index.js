var jsonfile = require('jsonfile');
var userJSON = require('../user.json');
/*
 * GET home page.
 */

 exports.view = function(req, res){
	//jsonfile.writeFile(file, obj, function(err) {console.error(err)});
	res.render('index', userJSON);
};

exports.viewLogin = function(req, res){

	var name = req.body.first + " " + req.body.last;

	userJSON["name"] = name;
	console.log(userJSON);

	res.render('index', userJSON);
};
