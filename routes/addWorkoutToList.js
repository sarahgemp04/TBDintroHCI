var listToAdd = require("../yourList.json");



exports.addWorkoutToList = function(req, res) {    
    console.log("addWorkoutToList called");
    

    listToAdd["dropdown"] = false;
    var newListItem = {
       'video': req.query.id,
       'name': req.query.name,
       'info': req.query.info,
       'Description': req.query.desc
    }
    
    console.log("this is the workout you're adding not in dropdown.");
    console.log(newListItem);
    listToAdd.workouts.push(newListItem);
    console.log("this is the entire list now");
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
