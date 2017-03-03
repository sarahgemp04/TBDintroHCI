var jsonfile = require('jsonfile');
var userJSON = require('../user.json');
/*
 * GET home page.
 */

 exports.view = function(req, res){
	//jsonfile.writeFile(file, obj, function(err) {console.error(err)});
		var today = new Date();
	if(userJSON.date == "" || userJSON.date == undefined) {
		userJSON["date"] = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	}
	res.render('index', userJSON);
};

exports.viewLogin = function(req, res){

	var name = req.body.first + " " + req.body.last;

	userJSON["name"] = name;
	var today = new Date();
	if(userJSON.date == "" || userJSON.date == undefined) {
		userJSON["date"] = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	}
	console.log(userJSON);

	res.render('index', userJSON);
};
