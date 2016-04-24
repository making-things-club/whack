import Button from '../../ui/button/button.jsx';
import BlackBox from '../../ui/blackbox/BlackBox';
import Title from '../../ui/title/title.jsx';
import PlayerScores from '../../ui/playerScores/PlayerScores.jsx';
import styles from './gameEnd.mss';

export default class GameEnd extends React.Component {

  renderPlayers() {
    return this.props.players.map((player)=>{
      var currentPlayer = (player._id === this.props.player._id) ? ' (You!)' : '';
      return(
        <p>
          {player.name + ': ' + player.score}
          <span>{currentPlayer}</span>
        </p>
      )
    })
  }

  render() {
    const winner = _.max(this.props.players, (player) => player.score );
    return(
      <div>
        <BlackBox>
          <div className={styles.boxContainer}>
            <Title value="Scoreboard" />
            <p className={styles.subtitle}>
              The winner is...
            </p>
            <p className={styles.name}>
              {winner.name}
            </p>
            <p className={styles.playerScroe}>
              with {winner.score}
            </p>
            <img className={styles.featureImage} src="/images/guacamole-bowl.svg" />
          </div>
        </BlackBox>
        <PlayerScores players={this.props.players} />
      </div>
    )
  }
}
