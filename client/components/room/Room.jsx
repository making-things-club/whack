import TrackerReact from 'meteor/ultimatejs:tracker-react';
import styles from './room.mss';

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
    return Players.find({ roomId : this.props.roomId }).fetch();
  }

  onJoinRoom(playerName) {

    const roomId = this.props.roomId;
    Meteor.call('joinRoom', roomId, playerName, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
        this.setState({ playerId: result });
        browserHistory.push('/room/ready');
		});
  }

  onStartRound() {

    const roomId = this.props.roomId;
    const playerId = this.state.playerId;
    Meteor.call('startRoom', roomId, playerId, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
		});
  }

  getChildrenWidthProps () {

    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        roomId: this.props.roomId, // do we need this???
        player: this.player(), // player.name player.score
        players: this.players(),
        joinRoom: this.onJoinRoom.bind(this),
        startRound: this.onStartRound.bind(this),
      });
    });
    return childrenWithProps;
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
        <div className={styles.game}>
          {this.getChildrenWidthProps()}
        </div>
      </div>
    )
  }
}
