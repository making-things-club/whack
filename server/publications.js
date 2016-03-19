Meteor.publish('rooms', function() {

	return Rooms.find();
});

Meteor.publish('rounds', function() {

	return Rounds.find();
});

Meteor.publish('players', function() {

	return Players.find();
});
