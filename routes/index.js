
/*
 * GET home page.
 */

exports.view = function(req, res){

var jsonfile = require('jsonfile')
	var file = '../tmp/data.json';
jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)
})
	
	//jsonfile.writeFile(file, obj, function(err) {console.error(err)});
  res.render('index', {
    //nothing to do
  });
};


