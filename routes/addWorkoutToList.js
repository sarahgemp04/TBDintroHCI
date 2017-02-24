var listToAdd = require("../yourList.json");

exports.addWorkoutToList = function(req, res) {    
    console.log("addWorkoutToList called");
    console.log("This is the id of the video to be added (should be the vid url)", req.query.id);
    var vid = JSON.parse(JSON.stringify(req.query.id));
    console.log(vid);

    var newListItem = {
       video: vid
    }

    listToAdd.video.push(newListItem);
    console.log(listToAdd);

    res.redirect('yourlist');

    /*var description = req.query.description;

    var newFriend = {
        name: friend,
        description: description,
        imageURL: "http://lorempixel.com/400/400/people"
    }

    data.friends.push(newFriend);

    res.redirect('/');
    console.log()*/
}
