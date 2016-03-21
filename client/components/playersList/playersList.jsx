import styles from './playersList.mss'

export default class PlayersList extends React.Component {

  getTitle() {
    const playerCount = Number(this.props.players && this.props.players.length)

    return (playerCount === 1)
              ? '1 player ready'
              : `${playerCount} players ready`
  }

  renderPlayers() {
    return this.props.players.map((thisPlayer)=>{
      return <li className={styles.player}>{thisPlayer.name}</li>
    })
  }

  render() {
    const players = this.props.players
    return (
      <div>
        <p className={styles.title}>{this.getTitle()} </p>
        <ul className={styles.playerList}>
          {this.props.players && this.renderPlayers()}
        </ul>
      </div>
    )
  }
}
