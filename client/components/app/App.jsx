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
    // console.log('componentWillReceiveProps this.props.params.roomId = ', this.props.params.roomId);
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

  players() {
    if(this.state.roomId) {
      return Players.find({ roomId : this.state.roomId }).fetch();
    }
    return null;
  }

  componentWillMount() {
    const pathname = this.props.location.pathname;
    if(!this.state.roomId) {
      if(pathname != '/' && pathname.indexOf('/join') === -1) {
        // if we are anywhere other than start join
        browserHistory.push('/');
      }
      else if(this.props.params.roomId) {
        this.setState({ roomId: this.props.params.roomId });
      }
      else if(this.props.location.pathname != '/') {
        // we don't have a roomId at all, so we shouldn't be anywhere else but start
        browserHistory.push('/');
      }
    }
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
        this.setState({ playerId: result });
        browserHistory.push('/ready');
		});
  }

  onStartRound() {

    const roomId = this.state.roomId;
    const playerId = this.state.playerId;
    Meteor.call('startRound', roomId, playerId, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
		});
  }

  getPropsWithChildren () {

    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        roomId: this.state.roomId,
        player: this.player(), // player.name player.score
        players: this.players(),
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
