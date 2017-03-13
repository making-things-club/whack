import TrackerReact from 'meteor/ultimatejs:tracker-react';
import getChildrenWithProps from '../../../../utils/utils';
import Ready from '../ready/Ready';
import Game from '../../game/game/Game';

const { browserHistory } = ReactRouter;

export default class Room extends TrackerReact(React.Component, {profiling : false}) {

  constructor(props) {
    super(props);
    this.state = {
      roomId: null,
      playerId: null
    };
  }

  componentWillUnmount() {
    // https://github.com/ultimatejs/tracker-react/issues/17
  }

  room() {
    return Rooms.findOne({ _id : this.state.roomId });
  }

  player() {
    return Players.findOne({ _id : this.state.playerId });
  }

  players() {
    return Players.find({ roomId : this.state.roomId }, {sort: {score: -1}}).fetch();
  }

  onRoomJoined(roomId) {
    this.setState({
      roomId,
      subscription: {
        room: Meteor.subscribe('room', roomId),
        players: Meteor.subscribe('players', roomId)
      }
    });
  }

  onCreatePlayer(playerName) {
    Meteor.call('createPlayer', this.state.roomId, playerName, (error, result) => {
        this.setState({ playerId: result });
        browserHistory.push('/room/ready');
		});
  }

  onStartRound() {
    const roomId = this.state.roomId;
    const playerId = this.state.playerId;
    Meteor.call('startRoom', roomId, playerId);
  }

  renderChild() {
    const roomState = this.room() ? this.room().state : null;
    const childProps = {
      player: this.player(),
      players: this.players(),
      room: this.room(),
      onRoomJoined: this.onRoomJoined.bind(this),
      createPlayer: this.onCreatePlayer.bind(this),
      startRound: this.onStartRound.bind(this)
    };
    if (roomState) {
      return <Game {...childProps} />
    }
    else {
      return getChildrenWithProps(this.props.children, childProps);
    }
  }

  render() {
    return (
      <div>
        {this.renderChild()}
      </div>
    )
  }
}
