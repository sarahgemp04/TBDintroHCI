exports.viewWorkoutList = function(req, res) { 
	var vid = req.query.id;
  res.render('yourlist', {
    'video': vid
  });
};
