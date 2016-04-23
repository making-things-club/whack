Meteor.publish('room', roomId => {
		if(!roomId) {
			return null;
		}
		return Rooms.find({_id : roomId});
});

Meteor.publish('players', roomId => {
	if(!roomId) {
		return null;
	}
	return Players.find({ roomId : roomId });
});
