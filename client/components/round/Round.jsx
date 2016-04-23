import styles from './round.mss';

export default class Round extends React.Component {

  render() {

    const amItheMole = this.props.player._id === this.props.room.pickedMoleId ? 'YES' : 'NO';
    console.log('Round this.props.player._id = ', this.props.player._id);
    console.log('Round this.props.room.pickedMoleId = ', this.props.room.pickedMoleId);
    return(
      <div>
        <h1>{amItheMole}</h1>
      </div>
    )
  }
}
