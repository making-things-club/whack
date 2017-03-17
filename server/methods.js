var playerPickedDelay = 3 * 1000;
var moleDuration = 3 * 1000;
var roundDuration = 30;

var roundDurations = {};
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
  Rooms.update({ _id : roomId}, { $set : { pickedPlayerId : pickedPlayerId, state : 'playerPicked', roundDurationRemaining: roundDuration}}); // On the front end compare this to stored playerId
  Players.update({ _id : pickedPlayerId}, { $set : { played : true }});
  roundDurations[roomId] = roundDuration;
  startMole(roomId, '');
  timeouts[roomId].playerPickedTimeout = Meteor.setTimeout(function() {
    checkRoundEnd(roomId);
  }, playerPickedDelay);
}

checkRoundEnd = (roomId) => {
  if (roundDurations[roomId]-- > 0) {
    timeouts[roomId].roundTimeout = Meteor.setTimeout(function() {
      Rooms.update({ _id : roomId}, { $set : { roundDurationRemaining: roundDurations[roomId]}});
      checkRoundEnd(roomId);
    }, 1000);
  } else {
    Meteor.setTimeout(function() {
      endRound(roomId);
    }, 1000);
  }
}

startMole = (roomId, pickedMoleId) => {
  if (!timeouts[roomId]) {
    clearAllTimeouts(roomId);
  }
  timeouts[roomId].moleTimeout = Meteor.setTimeout(function() {
    showMole(roomId, pickedMoleId)
  }, moleDuration);
}

showMole = (roomId, pickedMoleId) => {
  var pickedMoleId = pickMole(roomId, pickedMoleId)._id;
  Rooms.update({ _id : roomId}, { $set : { pickedMoleId : pickedMoleId, state : 'molePicked'}}); // On the front end compare this to stored playerId
  startMole(roomId, pickedMoleId);
}

endRound = (roomId) => {
  clearAllTimeouts(roomId);
  var notPlayedPlayers = Players.find({ roomId : roomId, played : false });
  if(notPlayedPlayers.count() > 0) {
    Players.update({ roomId : roomId }, { $set : { joined : false }}, {multi : true });
    Rooms.update({ _id : roomId }, {$set : {rounds : 0, state : 'roundEnded'}});
  }
  else {
    delete timeouts[roomId];
    Rooms.update({ _id : roomId }, {$set : {rounds : 0, state : 'gameEnded', roundDurationRemaining: roundDuration}});
  }
}

clearAllTimeouts = (roomId) => {
  const roomTimeouts = timeouts[roomId];
  if(roomTimeouts) {
    if (roomTimeouts.playerPickedTimeout) { Meteor.clearTimeout(roomTimeouts.playerPickedTimeout); }
    if (roomTimeouts.moleTimeout) { Meteor.clearTimeout(roomTimeouts.moleTimeout); }
    if (roomTimeouts.moleHitTimeout) { Meteor.clearTimeout(roomTimeouts.moleHitTimeout); }
    if (roomTimeouts.roundTimeout) { Meteor.clearTimeout(roomTimeouts.roundTimeout); }
  }
}

generateCode = () => {
  let text = '';
  const possible = 'abcdefghjkmnpqrstuvwxyz23456789';
  for(let i=0; i < 4; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

Meteor.methods({

  createRoom: () => {
    const roomCode = generateCode();
    const roomId = Rooms.insert({
      rounds : 0,
      state : '',
      pickedPlayerId : '',
      pickedMoleId : '',
      roundDuration: roundDuration,
      roomCode
    });
    timeouts[roomId] = {};
    return {roomId, roomCode};
  },

  findRoom: (roomCode) => {
    var room = Rooms.findOne({ roomCode: roomCode.toLowerCase() });
    if (room) {
      return room._id;
    } else {
      return false;
    }
  },

  createPlayer: (roomId, playerName) => {
    var room = Rooms.findOne({ _id : roomId });
    if(room) {
      var random = Math.random();
      return Players.insert({
        name : playerName,
        roomId : room._id,
        played : false,
        score : 0,
        joined: false,
        random : random
      });
    }
    // TODO error message for room doesn't exist
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
      timeouts[roomId].moleHitTimeout = Meteor.setTimeout(() => {
        var playerId = room.pickedPlayerId;
        Players.update({ _id : playerId}, {$inc : { score : 1}});
        showMole(roomId, room.pickedMoleId);
      }, 250);
    }
  }
});
