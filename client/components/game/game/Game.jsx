import RoundReady from '../roundReady/RoundReady';
import Round from '../round/Round';
import RoundEnd from '../roundEnd/RoundEnd';
import GameEnd from '../gameEnd/GameEnd';
import Countdown from '../../ui/countdown/Countdown';

const { browserHistory } = ReactRouter;

export default class Game extends React.Component {

  constructor(props) {
    super(props);
  }

  getRoomState() {
    if(this.props.params && this.props.params.roomState) {
      return this.props.params.roomState;
    }
    if(this.props.room) {
      return this.props.room.state;
    }
    return null;
  }

  renderChild() {
    let roomState = this.getRoomState();
    const childProps = this.props;
    switch(roomState) {
      case 'playerPicked':
        return <RoundReady {...childProps}/>;
      case 'molePicked':
        return <Round {...childProps} />;
      case 'roundEnded':
        return <RoundEnd {...childProps} />;
      case 'gameEnded':
        return <GameEnd {...childProps} />;
      default:
        return '';
    }
  }

  getRoundPlayer() {
    const players = this.props.players;
    const roundPlayerId = this.props.room.pickedPlayerId;
    let roundPlayer = null;
    players.forEach(player => {
      if(player._id === roundPlayerId) {
        roundPlayer = player;
      }
    });

    return roundPlayer;
  }

  renderRoundPlayer() {
    const roundPlayer = this.getRoundPlayer();
    if(roundPlayer) {
      return (
        <div>
          <h1>{roundPlayer.name + '\'s'}</h1>
          <h2>score</h2>
          <h1>{roundPlayer.score}</h1>
        </div>
      );
    }
  }

  renderPlayer() {
    const player = this.props.player;
    if(player.played) {
      return (
        <p>{player.name + '\'s score' + player.score}</p>
      );
    }
  }

  render() {

    // const pickedPlayerName = this.props.players.findOne({_id: this.props.room.pickedPlayerId}).name;

    // TODO add loading, i.e. check whether subscriptions are ready
    return (
      <div>
        {this.renderRoundPlayer()}
        <h1>Player: {this.props.player.name}</h1>
        <h2>Score: {this.props.player.score}</h2>
        <Countdown />
        <div>
          {this.renderChild()}
        </div>
        {this.renderPlayer()}
      </div>
    )
  }
}
