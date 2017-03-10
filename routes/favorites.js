var savedFavorites = require('../savedFavorites.json');

exports.viewfavorites = function(req, res) { 
	console.log("trying to display all favorites of: " + JSON.stringify(savedFavorites));
  res.render('favorites', savedFavorites);
};
