export default class App extends React.Component {

  onCreateRoom(roomName) {

    Meteor.call('createRoom', roomName, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
        this.setState({ gameId: result });
		});
  }

  onJoinRoom(playerName) {

    const gameId = this.state.gameId;
    console.log('gameId = ' + gameId);
    Meteor.call('joinRoom', gameId, playerName, (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
		});
  }

  onStartRound() {

    Meteor.call('startRound', (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
		});
  }

  getPropsWithChildren () {

    const childrenWithProps = React.Children.map(this.props.content, (child) => {
      return React.cloneElement(child, {
        gameId: this.state.gameId, 
        createRoom: this.onCreateRoom,
        joinRoom: this.onJoinRoom,
        startRound: this.onStartRound,
      });
    });
    return childrenWithProps;
  },

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
