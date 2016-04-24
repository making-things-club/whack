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

  render() {
    return(
      <div>
        <BlackBox>
          <Countdown />
        </BlackBox>
        {this.renderIngredient()}
      </div>
    )
  }
}
