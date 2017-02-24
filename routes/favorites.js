var savedFavorites = require('../savedFavorites.json');

exports.viewfavorites = function(req, res) { 
  res.render('favorites', savedFavorites);
};
