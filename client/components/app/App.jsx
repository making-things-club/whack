import TrackerReact from 'meteor/ultimatejs:tracker-react';

import styles from './app.mss';
import Start from '../start/Start.jsx';
import Room from '../room/Room.jsx';
import Hill from '../hill/Hill.jsx';
import Cloud from '../cloud/Cloud.jsx';

const { browserHistory } = ReactRouter;

export default class App extends TrackerReact(React.Component, {profiling : false}) {

  constructor(props) {
    super(props);

    this.state = {
      roomId: this.props.params.roomId
    }
  }

  componentWillMount() {
    const pathname = this.props.location.pathname;
    if(!this.state.roomId && pathname !== '/') {
      browserHistory.push('/');
    }
    // TODO -- also check for playerId at some point...
  }

  // Create room collection, store id on state and push players to /room/join with roomId
  onCreateRoom(roomName) {

    Meteor.call('createRoom', (error, result) => {
        this.setState({ roomId: result });
        browserHistory.push('/room/join/' + this.state.roomId);
		});
  }

  getChildrenWidthProps () {

    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        roomId: this.state.roomId
      });
    });
    return childrenWithProps;
  }

  // If we have a room id either threough room creation or from url, display room, otherwise show start
  getChildren() {

    if(this.state.roomId) {
      return this.getChildrenWidthProps();
    }
    return <Start createRoom={this.onCreateRoom.bind(this)} />;
  }

  render() {

    return (
      <div className={styles.app}>
        <div className={styles.game}>
          {this.getChildren()}
        </div>
        <div className={styles.cloudLeft}>
          <Cloud direction="left" />
        </div>
        <div className={styles.cloudRight}>
          <Cloud direction="right" />
        </div>
        <div className={styles.hill}>
          <Hill />
        </div>
      </div>
    )
  }
}
