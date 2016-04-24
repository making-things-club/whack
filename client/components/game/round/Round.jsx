import BlackBox from '../../ui/blackbox/BlackBox';
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

  render() {
    return(
      <div>
        {this.props.renderRoundPlayer(this.props)}
        {this.renderIngredient()}
        {this.renderPlayerScore(this.props)}
      </div>
    )
  }
}
