const { browserHistory } = ReactRouter;

export default class App extends React.Component {

  onCreateRoom(roomName) {

    Meteor.call('createRoom', roomName, (error, result) => {
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
        gameId: this.state ? this.state.gameId : null,
        createRoom: this.onCreateRoom.bind(this),
        joinRoom: this.onJoinRoom,
        startRound: this.onStartRound,
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
