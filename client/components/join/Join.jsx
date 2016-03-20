import styles from './join.mss';
import Title from '../title/title.jsx'
import GameLocation from '../gameLocation/gameLocation.jsx'
import Button from '../button/button.jsx'
import TextInput from '../textInput/textInput.jsx'

export default class Join extends React.Component {

  onJoinRoom(e) {
    e.preventDefault();

    const playerName = ReactDOM.findDOMNode(this.refs.playerName).value;
    this.props.joinRoom(playerName);
  }

  render() {
    return(
      <div className={styles.container}>
        <Title value="Player name" />
        <GameLocation roomId={this.props.roomId} />
        <TextInput ref="playerName" placeholder="Your name" />
        <br/>
        <Button onClick={(e)=>this.onJoinRoom(e)}>Join game</Button>
      </div>
    )
  }
}
