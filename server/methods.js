getRoundId = function getRoundId(roomId) {
  var room = Rooms.findOne({ _id : roomId });
  var rounds = room.rounds; // update this once round is finished
  var round = Rounds.findOne({ roomId : roomId, round : rounds });
  var roundId = round ? round._id : Rounds.insert({ gameId : gameId, round : rounds, players : 0});
}

allPlayersStartRound = function allPlayersStartRound(roundId, playerId) {
  Rounds.update({ _id : roundId, $inc:{players : 1}}); // this means same player can start multiple times, not great
  var roundPlayers = Rounds.findOne({ _id : roundId }).players;
  var players = Players.find({ roomId : roomId }).count();
  return players <= roundPlayers;
}

pickPlayer = function pickPlayer() {

}

Meteor.methods({

  'createRoom': function(roomName) {

    return Rooms.insert({ name : roomName, rounds : [] }); // returns room._id
  },

  'joinRoom': function(roomId, playerName) {
    var room = Rooms.findOne({ _id : roomId });
    if(room) {
      return Players.insert({ name : playerName, roomId : roomId, played : false, score : 0 }); // return player._id
    }
  },

  'startRound': function(roomId, playerId) {

    // TODO evaluate whether new round needs to be created of just add player to current
    var room = Rooms.findOne({ _id : roomId });
    var rounds = room.rounds;
    if(!room.rounds.length) {
      // create new round object and add it
      Rooms.update({ _id : roomId, })
    }
    else {

        // get latest, check whetehr finished or not
    }

    var round = room.rounds[room.rounds.length - 1]; // update this once round is finished
    var round = Rounds.findOne({ roomId : roomId, round : rounds });
    var roundId = round ? round._id : Rounds.insert({ gameId : gameId, round : rounds, players : 0});


    var roundId = getRoundId(roomId);

    // {finished : true | false, playersJoined : 0, startTime : , duration :, playerId : }

    // TODO check whether all players have called start round
    if(allPlayersStartRound(roundId, playerId)) {
      var pickedPlayerId = pickPlayer(gameId);
    }
    // TODO if so ->
    // TODO pick a player from Players, where player hasn't had a go yet
    // TODO do a timeout, and actually start the game...
  },

});
