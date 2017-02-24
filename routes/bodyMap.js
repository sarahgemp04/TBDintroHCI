var days = require('../days.json');

exports.viewBodyMap = function(req, res) { 

  if(req.query.id == undefined) {
    var bodyMap = "Body Map"
  	res.render('bodyMap', {
  	 'title': bodyMap,
     'day': ""
  });
  } else {
  	var day = req.query.id;
    console.log(day);
    //day = JSON.parse(JSON.stringify(days.days.day));
    //console.log(day);
    //weekDay = JSON.parse(JSON.stringify(day["title"]));
  	//console.log(weekDay);
  	res.render('bodyMap', {
  		'title': "Friday",
      'day': req.query.id
  	});
  }

};