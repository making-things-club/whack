const { browserHistory } = ReactRouter;
import BlackBox from '../../../ui/blackbox/BlackBox';
import Title from '../../../ui/title/title.jsx';
import PlayerScores from '../../../ui/playerScores/PlayerScores.jsx';
import Button from '../../../ui/button/button.jsx'
import styles from './gameEnd.mss';

export default class GameEnd extends React.Component {

  goToHome(e) {
    browserHistory.push('/');
  }

  render() {
    const winner = _.max(this.props.players, (player) => player.score );
    return(
      <div className={styles.gameEnd}>
        <BlackBox>
          <div className={styles.boxContainer}>
            <Title value="The winner is..." />
            <p className={styles.name}>
              {winner.name} with {winner.score}
            </p>
            <img className={styles.featureImage} src="/images/guacamole-bowl.svg" />
          </div>
        </BlackBox>
        <PlayerScores players={this.props.players} />
        <div className={styles.buttons}>
          <Button onClick={(e)=>this.goToHome(e)}>New game</Button>
        </div>
      </div>
    )
  }
}
