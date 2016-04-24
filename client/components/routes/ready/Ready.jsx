import styles from './ready.mss';
import Title from '../../ui/title/title.jsx'
import GameLocation from '../../ui/gameLocation/gameLocation.jsx'
import Paragraph from '../../ui/paragraph/paragraph.jsx'
import PlayersList from '../../ui/playersList/playersList.jsx'
import Button from '../../ui/button/button.jsx'

export default class Ready extends React.Component {

  goToGame(e) {
    this.props.startRound();
  }

  render() {
    return(
      <div className={styles.container}>
        <Title value="Preparing the ingredients" />
        <GameLocation roomId={this.props.roomId} />
        <Paragraph>
          Wait for all the players to join before you start the game!
        </Paragraph>
        <PlayersList players={this.props.players} />
        <Button onClick={()=>this.goToGame()}>Start the game</Button>
      </div>
    )
  }
}
