import styles from './join.mss';
import Title from '../title/title.jsx'
import GameLocation from '../gameLocation/gameLocation.jsx'
import Button from '../button/button.jsx'
import TextInput from '../textInput/textInput.jsx'

export default class Join extends React.Component {

  onJoinRoom(e) {
    e.preventDefault();
    this.props.joinRoom(this.refs.playerName.value);
  }

  render() {
    return(
      <div className={styles.container}>
        <Title value="Player name" />
        <GameLocation roomId={this.props.roomId} />
        <form onSubmit={(e)=>this.onJoinRoom(e)}>
          <TextInput ref="playerName" label="Your name" />
          <Button onClick={(e)=>this.onJoinRoom(e)}>Join game</Button>
        </form>
      </div>
    )
  }
}
