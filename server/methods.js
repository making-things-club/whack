var playerPickedDelay = 1*1000; //10 * 1000;
var moleDuration = 5*1000; //5 * 1000;
var roundDuration = 15 * 1000;

var timeouts = {};

// check whether all joined players have pressed start
playersStarted = (roomId, playerId) => {
  Players.update({ _id : playerId}, { $set : { joined : true }});
  var players = Players.find({ roomId : roomId });
  var joinedPlayers = Players.find({ roomId : roomId, joined : true });
  return joinedPlayers.count() === players.count();
}

// pick a random player from the list of players
pickPlayer = (roomId) => {
  var random = Math.random();
  var player = Players.findOne({played: false, roomId: roomId, random: {$gte: random}}, {sort: {random:1}});
  if(!player) {
    player = Players.findOne({played: false, roomId: roomId, random: {$lte: random}}, {sort: {random:1}});
  }
  return player;
}

pickMole = (roomId, pickedMoleId) => {
  var random = Math.random();
  var player = Players.findOne({roomId: roomId, _id: {$ne: pickedMoleId}, random: {$gte: random}}, {sort: {random:1}});
  if(!player) {
    player = Players.findOne({roomId: roomId, _id: {$ne: pickedMoleId}, random: {$lte: random}}, {sort: {random:1}});
  }
  return player;
}

startRound = (roomId) => {
  clearAllTimeouts(roomId);
  var pickedPlayerId = pickPlayer(roomId)._id;
  var now = Date.now();
  Rooms.update({ _id : roomId}, { $set : { pickedPlayerId : pickedPlayerId, state : 'playerPicked', roundStartTime : now, roundDuration : roundDuration}}); // On the front end compare this tostored playerId
  Players.update({ _id : pickedPlayerId}, { $set : { played : true }});
  timeouts[roomId].playerPickedTimeout = Meteor.setTimeout(function() {
    startMole(roomId, '')
  }, playerPickedDelay);
  timeouts[roomId].roundTimeout = Meteor.setTimeout(function() {
    endRound(roomId)
  }, playerPickedDelay + roundDuration);
}

startMole = (roomId, pickedMoleId) => {
  timeouts[roomId].moleTimeout = Meteor.setTimeout(function() {
    showMole(roomId, pickedMoleId)
  }, moleDuration);
}

showMole = (roomId, pickedMoleId) => {
  var pickedMoleId = pickMole(roomId, pickedMoleId)._id;
  Rooms.update({ _id : roomId}, { $set : { pickedMoleId : pickedMoleId, state : 'molePicked'}}); // On the front end compare this tostored playerId
  startMole(roomId, pickedMoleId);
}

endRound = (roomId) => {
  clearAllTimeouts(roomId);
  var notPlayedPlayers = Players.find({ roomId : roomId, played : false });
  if(notPlayedPlayers.count() > 0) {
    Rooms.update({ _id : roomId }, {$set : {rounds : 0, state : 'roundEnded', roundStartTime : 0, roundDuration : 0}});
  }
  else {
    delete timeouts[roomId];
    Rooms.update({ _id : roomId }, {$set : {rounds : 0, state : 'gameEnded', roundStartTime : 0, roundDuration : 0}});
  }
}

clearAllTimeouts = (roomId) => {
  const roomTimeouts = timeouts[roomId];
  if(roomTimeouts) {
    Meteor.clearTimeout(roomTimeouts.playerPickedTimeout);
    Meteor.clearTimeout(roomTimeouts.moleTimeout);
    Meteor.clearTimeout(roomTimeouts.roundTimeout);
  }
}

Meteor.methods({

  createRoom: () => {
    const roomId = Rooms.insert({ rounds : 0, state : '', roundStartTime : 0, roundDuration : 0, pickedPlayerId : '', pickedMoleId : ''});
    timeouts[roomId] = {};
    return  roomId;
  },

  joinRoom: (roomId, playerName) => {
    var room = Rooms.findOne({ _id : roomId });
    if(room) {
      var random = Math.random();
      return Players.insert({ name : playerName, roomId : roomId, played : false, score : 0, joined: false, random : random }); // return player._id
    }
  },

  startRoom: (roomId, playerId) => {
    var room = Rooms.findOne({ _id : roomId });
    if(room) {

      if(playersStarted(roomId, playerId)) {
        Rooms.update({ _id : roomId }, { $set : {state : 'playersStarted'}})
        startRound(roomId);
      }
    }
    // TODO return error message for room not found
  },

  whackMole: (roomId, moleId) => {
    var room = Rooms.findOne({ _id : roomId});
    if(room.pickedMoleId === moleId && room.state === 'molePicked') {
      Meteor.clearTimeout(timeouts[roomId].moleTimeout);
      var playerId = room.pickedPlayerId;
      Players.update({ _id : playerId}, {$inc : { score : 1}});
      showMole(roomId, room.pickedMoleId);
    }
  }
});
