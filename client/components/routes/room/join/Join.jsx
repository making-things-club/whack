import styles from './join.mss';
import FindRoom from '../../../ui/findRoom/FindRoom';
import CreatePlayer from '../../../ui/createPlayer/CreatePlayer';

export default class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: null,
      roomCode: null,
      error: null
    };
  }

  onFindRoom(roomCode) {
    Meteor.call('findRoom', roomCode, (error, roomId) => {
      if (roomId) {
        this.setState({roomId, roomCode, error: null});
        this.props.onRoomJoined(roomId);
      } else {
        this.setState({error: 'No game found'});
      }
    });
  }

  render() {
    let content;
    if (this.state.roomId) {
      content = (
        <CreatePlayer
          title="Join Game"
          roomCode={this.state.roomCode}
          createPlayer={this.props.createPlayer}
          />
      );
    } else {
      content = (
        <FindRoom
          findRoom={this.onFindRoom.bind(this)}
          error={this.state.error} />
      );
    }

    return(
      <div className={styles.container}>
        {content}
      </div>
    )
  }
}
