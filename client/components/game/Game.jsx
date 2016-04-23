import RoundReady from '../roundReady/RoundReady';
import Round from '../round/Round';
import RoundEnd from '../roundEnd/RoundEnd';

const { browserHistory } = ReactRouter;

export default class Game extends React.Component {

  constructor(props) {
    super(props);
  }

  renderChild() {
    const roomState = this.props.room ? this.props.room.state : null;
    const childProps = this.props; /*{
      roomId: this.props.roomId, // do we need this???
      player: this.player(), // player.name player.score
      players: this.players(),
      room: this.room()
    };*/
    switch(roomState) {
      case 'playerPicked':
        return <RoundReady {...childProps}/>;
      case 'molePicked':
        return <Round {...childProps} />;
      case 'roundEnd':
        return <RoundEnd {...childProps} />;
      default:
        return '';
    }
  }

  render() {

    // TODO add loading, i.e. check whether subscriptions are ready
    return (
      <div>
        <h1>Score: {this.props.player.score}</h1>
        <div>
          {this.renderChild()}
        </div>
      </div>
    )
  }
}
