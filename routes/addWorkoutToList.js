var listToAdd = require("../yourList.json");



exports.addWorkoutToList = function(req, res) {    
    console.log("addWorkoutToList called");
    

    var newListItem = {
       'video': req.query.id,
       'name': req.query.name,
       'info': req.query.info,
       'Description': req.query.desc
    }
    listToAdd["dropdown"] = false;

    listToAdd.workouts.push(newListItem);
    console.log(listToAdd);

    res.redirect('yourlist');
    
}

exports.addDropdownWorkoutToList = function(req, res) {    
    console.log("adddropdownWorkoutToList called");
    console.log(req.query.name);

    

    listToAdd["dropdown"] = true;
    var newListItem = {
       'video': req.query.id,
       'name': req.query.name,
       'info': req.query.info,
       'Description': req.query.desc
    }

    listToAdd.workouts.push(newListItem);
    console.log(listToAdd);

    res.redirect('yourlist');

    
}
