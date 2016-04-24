import TrackerReact from 'meteor/ultimatejs:tracker-react';
import getChildrenWidthProps from '../../utils/utils';

import styles from './app.mss';
import Start from '../routes/start/Start.jsx';
import Room from '../routes/room/Room.jsx';

const { browserHistory } = ReactRouter;

export default class App extends TrackerReact(React.Component, {profiling : false}) {

  constructor(props) {
    super(props);

    this.state = {
      roomId: this.props.params.roomId
    }
  }

  componentWillMount() {
    // UNCOMMENT THIS IN FINAL
    /*const pathname = this.props.location.pathname;
    if(!this.state.roomId && pathname !== '/') {
      browserHistory.push('/');
    }*/
    // TODO -- also check for playerId at some point...
  }

  // Create room collection, store id on state and push players to /room/join with roomId
  onCreateRoom(roomName) {
    Meteor.call('createRoom', (error, result) => {
        console.log('onCreateRoom ', error, result);
        this.setState({ roomId: result });
        browserHistory.push('/room/join/' + this.state.roomId);
    });
  }

  // If we have a room id either threough room creation or from url, display room, otherwise show start
  getChildren() {

    // COMMENT OUT LINE BELOW IN FINAL

    return getChildrenWidthProps(this.props.children, {
      roomId: this.state.roomId,
      createRoom: this.onCreateRoom.bind(this)
    });

    if(this.state.roomId) {
      return getChildrenWidthProps(this.props.children, {
        roomId: this.state.roomId,
        createRoom: this.onCreateRoom.bind(this)
      });
    }
    return <Start createRoom={this.onCreateRoom.bind(this)} />;
  }

  render() {

    return (
      <div className={styles.app}>
        {this.getChildren()}
      </div>
    )
  }
}
