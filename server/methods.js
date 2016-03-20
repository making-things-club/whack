// check whether all joined players have pressed start
playersStarted = function playersStarted(roomId) {
  Rooms.update({ _id : roomId, $inc: { playersStarted : 1 }}); // Nice to have - store player ids
  var room = Rooms.findOne({ _id : roomId });
  var players = Players.find({ gameId : gameId});
  return room.playersStarted === players.count();
}

// pick a random player from the list of players
pickPlayer = function pickPlayer() {
  var random = Math.random();
  return Players.find({random:{$gt:random}}).sort({random:1}).limit(1);
}

Meteor.methods({

  'createRoom': function() {

    return Rooms.insert({ rounds : 0, roundFinished : false, roundStartTime : 0, roundDuration : 0, playersStarted: 0}); // returns room._id
  },

  'joinRoom': function(roomId, playerName, moleId) {
    var room = Rooms.findOne({ _id : roomId });
    if(!moleId) {
      moleId = 1;
    }
    if(room) {
      var random = Math.random();
      return Players.insert({ name : playerName, moleId: moleId, roomId : roomId, played : false, score : 0, random : random }); // return player._id
    }
  },

  'startRound': function(roomId, playerId) {

    // TODO evaluate whether new round needs to be created of just add player to current
    var room = Rooms.findOne({ _id : roomId });
    if(room) {

      if(playersStarted(roomId)) {
        // TODO start game
        var pickedPlayer = pickPlayer(roomId);
      }
    }
    // TODO return error message for room not found
  },

});
