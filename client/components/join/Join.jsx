import styles from './join.mss';

export default class Join extends React.Component {

  constructor() {
    super();
  }

  onJoinRoom(e) {
    e.preventDefault();

    const playerName = ReactDOM.findDOMNode(this.refs.playerName).value;
    this.props.joinRoom(playerName);
  }

  getJoinRoomUrl() {
    var joinRoomUrl = window.location.href;
    return joinRoomUrl;
  }

  render() {

    return(
      <div>
        <h1>Choose your Mole.</h1>
        <p>Visit this URL to join the game.</p>
        <p>{this.getJoinRoomUrl()}</p>
        <label>Enter your name</label>
        <input type="text" ref="playerName" placeholder="Your name" />
        <br/>
        <button onClick={(e)=>this.onJoinRoom(e)}>Join game</button>
      </div>
    )
  }
}
