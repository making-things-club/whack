import styles from './ready.mss';
import Title from '../title/title.jsx'
import GameLocation from '../gameLocation/gameLocation.jsx'
import Button from '../button/button.jsx'

export default class Ready extends React.Component {

  goToGame(e) {
    this.props.startRound();
  }

  renderPlayers() {
    const {player, players} = this.props

    if (players === null) return null

    return players.map((thisPlayer)=>{
      return (thisPlayer._id === player._id) ? <li><em>{thisPlayer.name}</em></li> : <li>{thisPlayer.name}</li>
    })
  }

  render() {
    const joinPath = `http://${window.location.hostname}:${window.location.port}/join/${this.props.roomId}`
    return(
      <div>
        <Title value="Waiting room" />
        <GameLocation roomId={this.props.roomId} />
        <ul>{this.renderPlayers()}</ul>
        <p>Waiting for all the players to join before starting the game</p>
        <Button onClick={()=>this.goToGame()}>Start game</Button>
      </div>
    )
  }
}
