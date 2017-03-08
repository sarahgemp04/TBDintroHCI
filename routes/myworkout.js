exports.viewWorkoutScreen = function(req, res) { 
  res.render('myworkout', {
    'dropdown': false
  });
};

/*exports.viewDropdownWorkoutScreen = function(req, res) { 
  res.render('myworkout', {
    'dropdown': true
  });
};*/
