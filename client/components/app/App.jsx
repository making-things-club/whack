const { browserHistory } = ReactRouter;

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      subscription: {
        room: Meteor.subscribe('rooms'),
        players: Meteor.subscribe('players')
      }
    }
  }

  room() {
    if(this.state.roomId) {
      return Rooms.findOne({ _id : this.state.roomId });
    }
    return null;
  }

  player() {
    if(this.state.playerId) {
      return Players.findOne({ _id : this.state.playerId });
    }
    return null;
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps this.props.params = ', this.props.params);
  }

  onCreateRoom(roomName) {

    Meteor.call('createRoom', (error, result) => {
        this.setState({ roomId: result });
        browserHistory.push('/join/' + result);
		});
  }

  onJoinRoom(playerName) {

    const roomId = this.state.roomId;
    Meteor.call('joinRoom', roomId, playerName, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
		});
  }

  onStartRound() {

    Meteor.call('startRound', (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
		});
  }

  getPropsWithChildren () {

    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        roomId: this.state.roomId,
        createRoom: this.onCreateRoom.bind(this),
        joinRoom: this.onJoinRoom.bind(this),
        startRound: this.onStartRound.bind(this),
      });
    });
    return childrenWithProps;
  }

  render() {

    return (
      <div>
        <button onClick={()=>this.onCreateRoom()}>Create room</button>
        <button onClick={()=>this.onJoinRoom()}>Join room</button>
        <button onClick={()=>this.onStartRound()}>Start round</button>
        {this.getPropsWithChildren()}
      </div>
    )
  }
}
