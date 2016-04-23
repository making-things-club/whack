import RoundReady from '../roundReady/RoundReady';
import Round from '../round/Round';
import RoundEnd from '../roundEnd/RoundEnd';
import GameEnd from '../gameEnd/GameEnd';

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
        <div>
          {this.renderChild()}
        </div>
        {this.renderPlayer()}
      </div>
    )
  }
}
