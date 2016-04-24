import Countdown from '../../ui/countdown/Countdown';
import Ingredient from '../../ui/ingredient/Ingredient';
import styles from './round.mss';

export default class Round extends React.Component {

  renderIngredient() {
    if(this.props.player._id === this.props.room.pickedMoleId) {
      return <Ingredient ingredientClick={this.onIngredientClick.bind(this)} />;
    } else {
      return '';
    }
  }

  onIngredientClick() {
    console.log('Mole clicked!');
    this.props.sampler.triggerAttack('samples.onion');
    Meteor.call('whackMole', this.props.room._id, this.props.room.pickedMoleId, (error, result) => {
        console.log(error, result);
    });
  }

  render() {

    const amItheMole = this.props.player._id === this.props.room.pickedMoleId ? 'YES' : 'NO';
    console.log('Round this.props.player._id = ', this.props.player._id);
    console.log('Round this.props.room.pickedMoleId = ', this.props.room.pickedMoleId);
    return(
      <div>
        <Countdown />
        {this.renderIngredient()}
      </div>
    )
  }
}
