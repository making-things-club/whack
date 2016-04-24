import styles from './playerScores.mss'

export default class PlayerScores extends React.Component {

  render() {
    const {players} = this.props;
    return (
      <ul className={styles.container}>
        {players.map((player)=>{
          return (
            <li className={styles.player}>
              <span className={styles.playerName}>
                {player.name}
              </span>
              <span className={styles.spacer}></span>
              <span className={styles.playerScore}>
                {player.score}
              </span>
            </li>
          )
        })}
      </ul>
    )
  }
}
