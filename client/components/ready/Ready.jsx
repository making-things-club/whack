import styles from './ready.mss';
import Title from '../title/title.jsx'
import GameLocation from '../gameLocation/gameLocation.jsx'
import Paragraph from '../paragraph/paragraph.jsx'
import PlayersList from '../playersList/playersList.jsx'
import Button from '../button/button.jsx'

export default class Ready extends React.Component {

  goToGame(e) {
    this.props.startRound();
  }

  render() {
    return(
      <div>
        <Title value="Waiting room" />
        <GameLocation roomId={this.props.roomId} />
        <Paragraph>
          Wait for all the players to join before you start the game!
        </Paragraph>
        <PlayersList players={this.props.players} />
        <Button onClick={()=>this.goToGame()}>Start game</Button>
      </div>
    )
  }
}
