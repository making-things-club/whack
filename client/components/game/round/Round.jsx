import BlackBox from '../../ui/blackbox/BlackBox';
import Countdown from '../../ui/countdown/Countdown';
import Ingredient from '../../ui/ingredient/Ingredient';
import styles from './round.mss';

export default class Round extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      supportsVibration : ('vibrate' in navigator)
    }
  }

  renderIngredient() {
    if (this.props.player._id === this.props.room.pickedMoleId) {
      return <Ingredient ingredientClick={this.onIngredientClick.bind(this)} />;
    } else {
      return '';
    }
  }

  onIngredientClick() {
    console.log('Mole clicked!');
    this.props.sampler.triggerAttack('samples.onion');
    if (this.state.supportsVibration) {
      window.navigator.vibrate(100)
    }
    Meteor.call('whackMole', this.props.room._id, this.props.room.pickedMoleId, (error, result) => {
        console.log(error, result);
    });
  }

  renderPlayerScore(props) {
    const player = props.player;
    if(player.played) {
      return (
        <div className={styles.phonePlayer}>
          <BlackBox>
            <span className={styles.phonePlayerScore}>{player.name + '\'s score: ' + player.score}</span>
          </BlackBox>
        </div>
      );
    }
  }

  renderRoundPlayer(props) {
    const roundPlayer = this.getRoundPlayer(props);
    if(roundPlayer) {
      return (
        <BlackBox>
          <div className={styles.roundPlayer}>
            <p className={styles.roundPlayerTitle}>{roundPlayer.name + '\'s'}</p>
            <p className={styles.roundPlayerSubtitle}>score</p>
            <p className={styles.roundPlayerScore}>{roundPlayer.score}</p>
          </div>
          <Countdown />
        </BlackBox>
      );
    }
  }

  getRoundPlayer(props) {
    const players = props.players;
    const roundPlayerId = props.room.pickedPlayerId;
    let roundPlayer = null;
    players.forEach(player => {
      if(player._id === roundPlayerId) {
        roundPlayer = player;
      }
    });

    return roundPlayer;
  }


  render() {
    return(
      <div>
        {this.renderRoundPlayer(this.props)}
        {this.renderIngredient()}
        {this.renderPlayerScore(this.props)}
      </div>
    )
  }
}
