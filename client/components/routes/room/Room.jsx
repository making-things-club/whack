import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Ready from '../ready/Ready';
import Game from '../../game/game/Game';

const { browserHistory } = ReactRouter;

export default class Room extends TrackerReact(React.Component, {profiling : false}) {

  constructor(props) {
    super(props);

    this.state = {
      subscription: {
        room: Meteor.subscribe('room', this.props.roomId),
        players: Meteor.subscribe('players', this.props.roomId)
      }
    }
  }

  room() {
    return Rooms.findOne({ _id : this.props.roomId });
  }

  player() {
    return Players.findOne({ _id : this.state.playerId });
  }

  players() {
    return Players.find({ roomId : this.props.roomId }, {sort: {score: -1}}).fetch();
  }

  onJoinRoom(playerName) {

    const roomId = this.props.roomId;
    Meteor.call('joinRoom', roomId, playerName, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
        this.setState({ playerId: result });
        browserHistory.push('/room/game');
		});
  }

  onStartRound() {

    const roomId = this.props.roomId;
    const playerId = this.state.playerId;
    Meteor.call('startRoom', roomId, playerId, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);

		});
  }

  renderChild() {
    const roomState = this.room() ? this.room().state : null;
    const childProps = {
      roomId: this.props.roomId, // do we need this???
      player: this.player(), // player.name player.score
      players: this.players(),
      room: this.room(),
      joinRoom: this.onJoinRoom.bind(this),
      startRound: this.onStartRound.bind(this)
    };
    if(roomState) {
      return <Game {...childProps} />
    }
    else {
      const childrenWithProps = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, childProps);
      });
      return childrenWithProps;
    }
  }

  render() {

    // TODO add loading, i.e. check whether subscriptions are ready
    return (
      <div>
        <div style={{position: 'absolute', zIndex:1000}} >
          <p>Room state : {this.room() ? this.room().state : 'meow'}</p>
          <p>Picked player's id : {this.room() ? this.room().pickedPlayerId : 'meow'}</p>
          <p>Picked mole's id : {this.room() ? this.room().pickedMoleId : 'meow'}</p>
        </div>
        {this.renderChild()}
      </div>
    )
  }
}
