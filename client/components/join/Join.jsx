import styles from './join.mss';
import Title from '../title/title.jsx'
import Button from '../button/button.jsx'
import TextInput from '../textInput/textInput.jsx'

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
        <Title value="Player name" />
        <p>Visit this URL to join the game.</p>
        <p>{this.getJoinRoomUrl()}</p>
        <label>Enter your name</label>
        <TextInput ref="playerName" placeholder="Your name" />
        <br/>
        <Button onClick={(e)=>this.onJoinRoom(e)}>Join game</Button>
      </div>
    )
  }
}
