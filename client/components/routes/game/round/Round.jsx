import BlackBox from '../../../ui/blackbox/BlackBox';
import Ingredient from '../../../ui/ingredient/Ingredient';
import styles from './round.mss';

import Tone, {Sampler} from 'tone';

export default class Round extends React.Component {

  constructor(props) {
    super(props);

    this.preloadImages();
    this.state = {
      supportsVibration : ('vibrate' in navigator),
      sampler: this.createSampler()
    }
  }

  createSampler() {
    let sampler = new Sampler({
      samples : {
        onion : '../../audio/onion-chop.wav'
      }
    }).toMaster();

    return sampler;
  }

  preloadImages () {
    const ingredients = ['avocado', 'garlic', 'lime'];
    ingredients.forEach((ingredient) => {
      var img = new Image();
      var imgHit = new Image();
      img.src = `/images/ingredient-${ingredient}.png`;
      imgHit.src = `/images/ingredient-${ingredient}-hit.png`;
      img.onload = (e) => { /*console.log(e, this, `${ingredient} loaded`);*/ };
      imgHit.onload = (e) => { /*console.log(e, this, `${ingredient} hit loaded`);*/ };
    });
  }

  renderIngredient() {
    if (this.props.player._id === this.props.room.pickedMoleId) {
      return <Ingredient ingredientClick={this.onIngredientClick.bind(this)} />;
    } else {
      return '';
    }
  }

  onIngredientClick() {
    this.state.sampler.triggerAttack('samples.onion');
    if (this.state.supportsVibration) {
      window.navigator.vibrate(100)
    }
    Meteor.call('whackMole', this.props.room._id, this.props.room.pickedMoleId);
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
