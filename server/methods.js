var playersStartedDelay = 10 * 1000;
var playerPickedDelay = 10 * 1000;
var moleDuration = 5 * 1000;
var roundDuration = 30 * 1000;
var endRoundDelay = 10 * 1000;

var playersStartedTimeout;
var playersPickedTimeout;
var moleTimeout;
var roundTimeout;
var endRoundTimeout;

// check whether all joined players have pressed start
playersStarted = function playersStarted(roomId, playerId) {
  Players.update({ _id : playerId}, { $set : { joined : true }});
  var players = Players.find({ roomId : roomId });
  var joinedPlayers = Players.find({ roomId : roomId, joined : true });
  return joinedPlayers.count() === players.count();
}

// pick a random player from the list of players
pickPlayer = function pickPlayer(roomId) {
  // TODO we need to make sure we don't pick the same player multiple times!!!
  var random = Math.random();
  var player = Players.findOne({played: false, roomId: roomId, random: {$gte: random}}, {sort: {random:1}});
  if(!player) {
    player = Players.findOne({played: false, roomId: roomId, random: {$lte: random}}, {sort: {random:1}});
  }
  return player;
}

pickMole = function pickMole(roomId) {
  var random = Math.random();
  var player = Players.findOne({roomId: roomId, random: {$gte: random}}, {sort: {random:1}});
  if(!player) {
    player = Players.findOne({roomId: roomId, random: {$lte: random}}, {sort: {random:1}});
  }
  return player;
}

startRound = function startRound(roomId) {
  var pickedPlayerId = pickPlayer(roomId)._id;
  var now = Date.now();
  Rooms.update({ _id : roomId}, { $set : { pickedPlayerId : pickedPlayerId, state : 'playerPicked', roundStartTime : now, roundDuration : roundDuration}}); // On the front end compare this tostored playerId
  Player.update({ _id : pickedPlayerId}, { $set : { played : true }});
  playerPickedTimeout = Meteor.setTimeout(function() {
    startMole(roomId)
  }, playerPickedDelay);
  roundTimeout = Meteor.setTimeout(function() {
    endRound(roomId)
  }, playerPickedDelay + roundDuration);
}

startMole = function startMole(roomId) {
  moleTimeout = Meteor.setTimeout(function() {
    showMole(roomId)
  }, moleDuration);
}

showMole = function showMole(roomId) {
  var pickedMoleId = pickMole(roomId)._id;
  Rooms.update({ _id : roomId}, { $set : { pickedMoleId : pickedMoleId, state : 'molePicked'}}); // On the front end compare this tostored playerId
  startMole();
}

endRound = function endRound(roomId) {
  Meteor.clearTimeout(moleTimeout);
  var notPlayedPlayers = Players.find({ roomId : roomId, played : false });
  if(notPlayedPlayers.count() > 0) {
    Rooms.update({ _id : roomId }, {$set : {rounds : 0, state : 'roundEnded', roundStartTime : 0, roundDuration : 0}});
  }
  else {
    Rooms.update({ _id : roomId }, {$set : {rounds : 0, state : 'gameEnded', roundStartTime : 0, roundDuration : 0}});
  }
}

Meteor.methods({

  'createRoom': function() {
    console.log('createRoom');
    return Rooms.insert({ rounds : 0, state : '', roundStartTime : 0, roundDuration : 0, pickedPlayerId : '', pickedMoleId : ''}); // returns room._id
  },

  'joinRoom': function(roomId, playerName) {
    console.log('joinRoom playerName = ' + playerName + ' roomId = ' + roomId);
    var room = Rooms.findOne({ _id : roomId });
    if(room) {
      var random = Math.random();
      return Players.insert({ name : playerName, roomId : roomId, played : false, score : 0, joined: false, random : random }); // return player._id
    }
  },

  'startRoom': function(roomId, playerId) {
    var room = Rooms.findOne({ _id : roomId });
    if(room) {

      if(playersStarted(roomId, playerId)) {
        Rooms.update({ _id : roomId }, { $set : {state : 'playersStarted'}})
        startRound(roomId);
      }
    }
    // TODO return error message for room not found
  },

  'startRound': function(roomId) {
    // pick random player to play the damn thing
    playersStartedTimeout = Meteor.setTimeout(function() {
      startGame(roomId)
    }, playersStartedDelay);
  },

  'whackMole': function(roomId, moleId) {
    var room = Rooms.findOne({ _id : roomId});
    if(room.pickedMoleId === moleId && room.state === 'molePicked') {
      Meteor.clearTimeout(moleTimeout);
      var playerId = room.pickedPlayerId;
      Players.update({ _id : playerId}, {$inc : { score : 1}});
      showMole();
    }
  }
});
