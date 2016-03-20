import styles from './join.mss';
<<<<<<< HEAD
=======
const { browserHistory } = ReactRouter;
>>>>>>> ensureroomid

export default class Join extends React.Component {

  constructor() {
    super();
<<<<<<< HEAD
    this.state = {
      playerName: ''
    }
=======
>>>>>>> ensureroomid
  }

  onJoinRoom(e) {
    e.preventDefault();

<<<<<<< HEAD
  goToGame(e) {
    this.props.joinRoom(this.state.playerName);
=======
    const playerName = ReactDOM.findDOMNode(this.refs.playerName).value;
    this.props.joinRoom(this.props.roomId, playerName);
  }

  getJoinRoomUrl() {
    var joinRoomUrl = window.location.href;
    return joinRoomUrl;
>>>>>>> ensureroomid
  }

  render() {

    return(
      <div>
        <h1>Choose your Mole.</h1>
<<<<<<< HEAD
        <p>Share this URL to join the game.</p>
        <p><em>{this.props.params.roomId}</em></p>
        <div>
          <label>
            Your name
            <input
              type="text"
              value={this.state.playerName}
              onChange={(e)=>this.setPlayerName(e)}
            />
          </label>
        </div>
        <button onClick={()=>this.goToGame()}>Start game</button>
=======
        <p>Visit this URL to join the game.</p>
        <p>{this.getJoinRoomUrl()}</p>
        <label>Enter your name</label>
        <input type="text" ref="playerName" placeholder="Your name" />
        <br/>
        <button onClick={(e)=>this.onJoinRoom(e)}>Join game</button>
>>>>>>> ensureroomid
      </div>
    )
  }
}
