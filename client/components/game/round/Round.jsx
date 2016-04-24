import Countdown from '../../ui/countdown/Countdown';
import styles from './round.mss';

export default class Round extends React.Component {

  renderMole() {
    if(this.props.player._id === this.props.room.pickedMoleId) {
      console.log('show the mole!');
      return (
        <div className={styles.mole} onClick={(e)=>this.onMoleClick(e)}>
          M O L E !
        </div>
      )
    }
    else {
      return '';
    }
  }

  onMoleClick(e) {
    e.preventDefault();
    console.log('Mole clicked!');
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
        {this.renderMole()}
      </div>
    )
  }
}
