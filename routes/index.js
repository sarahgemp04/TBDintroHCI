var jsonfile = require('jsonfile');
/*
 * GET home page.
 */

 exports.view = function(req, res){
	//jsonfile.writeFile(file, obj, function(err) {console.error(err)});
	res.render('index', {
    //nothing to do
});
};

exports.viewLogin = function(req, res){
	console.log(req.body.first);
	console.log(req.body.last);
	var file = './tmp/data.json';
	jsonfile.writeFile(file, function(err, obj) {
		console.dir(obj);
		res.render('index', obj
    		//nothing to do
    	);
	});
};
