// check whether all joined players have pressed start
playersStarted = function playersStarted(roomId, playerId) {
  Players.update({ _id : playerId}, { $set : { joined : true }});
  var players = Players.find({ roomId : roomId });
  var joinedPlayers = Players.find({ roomId : roomId, joined : true });
  return joinedPlayers.count() === players.count();
}

// pick a random player from the list of players
pickPlayer = function pickPlayer() {
  var random = Math.random();
  var player = Players.find({random:{$gt:random}}, {sort: {random:1}}, {limit: 1});
  if(!player) {
    player = Players.find({random:{$lt:random}}, {sort: {random:1}}, {limit: 1});
  }
  console.log('player = ' + player._id);
  return player;
}

Meteor.methods({

  'createRoom': function() {
    console.log('createRoom');
    return Rooms.insert({ rounds : 0, roundFinished : false, roundStartTime : 0, roundDuration : 0}); // returns room._id
  },

  'joinRoom': function(roomId, playerName) {
    console.log('joinRoom playerName = ' + playerName + ' roomId = ' + roomId);
    var room = Rooms.findOne({ _id : roomId });
    if(room) {
      var random = Math.random();
      return Players.insert({ name : playerName, roomId : roomId, played : false, score : 0, joined: false, random : random }); // return player._id
    }
  },

  'startRound': function(roomId, playerId) {
    console.log('startRound');
    var room = Rooms.findOne({ _id : roomId });
    if(room) {

      if(playersStarted(roomId, playerId)) {
        // TODO start game
        var pickedPlayer = pickPlayer(roomId);
        console.log('pickedPlayer = ' + pickedPlayer);
      }
    }
    // TODO return error message for room not found
  },

});
