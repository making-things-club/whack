import styles from './create.mss';
import CreatePlayer from '../../../ui/createPlayer/CreatePlayer';

export default class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
      roomId: null
    };
    this.createRoom();
  }

  createRoom() {
    Meteor.call('createRoom', (error, {roomId, roomCode}) => {
      this.setState({roomId, roomCode});
      this.props.onRoomJoined(roomId);
    });
  }

  render() {

    return(
      <div className={styles.container}>
        <CreatePlayer
          title="Create Game"
          roomCode={this.state.roomCode}
          createPlayer={this.props.createPlayer}
          />
      </div>
    )
  }
}
