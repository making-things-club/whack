export default class App extends React.Component {

  onCreateRoom() {

    const react = this;
    Meteor.call('createRoom', 'test room name', (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
        this.setState({ gameId: result });
		});
  }

  onJoinRoom() {

    const gameId = this.state.gameId;
    console.log('gameId = ' + gameId);
    Meteor.call('joinRoom', gameId, ' Judit', (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
		});
  }

  onStartRound() {

    Meteor.call('startRound', (error, result) => {
				console.log('error = ' + error + ' result = ' + result);
		});
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.onCreateRoom()}>Create room</button>
        <button onClick={()=>this.onJoinRoom()}>Join room</button>
        <button onClick={()=>this.onStartRound()}>Start round</button>
        {this.props.children}
      </div>
    )
  }
}
