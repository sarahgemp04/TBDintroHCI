var savedNotes = require('../savedNotes.json');

exports.viewNotes = function(req, res) { 
  console.log(req.query.noted);
  savedNotes.description = req.query.noted[1];
  console.log(savedNotes);
  res.render('notes', savedNotes);
};
