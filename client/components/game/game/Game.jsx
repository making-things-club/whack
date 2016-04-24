import RoundReady from '../roundReady/RoundReady';
import Round from '../round/Round';
import RoundEnd from '../roundEnd/RoundEnd';
import GameEnd from '../gameEnd/GameEnd';

const { browserHistory } = ReactRouter;

export default class Game extends React.Component {

  constructor(props) {
    super(props);
  }

  getProps() {
    if(this.props.params && this.props.params.roomState) {
      const fakeProps = JSON.parse( '{"roomId":"e7ehuii2qnt5weQgb","player":{"_id":"4dyPCM959abH3j7Y9","name":"Judit","roomId":"e7ehuii2qnt5weQgb","played":false,"score":0,"joined":true,"random":0.5091277295723557},"players":[{"_id":"4dyPCM959abH3j7Y9","name":"Judit","roomId":"e7ehuii2qnt5weQgb","played":false,"score":0,"joined":true,"random":0.5091277295723557},{"_id":"zA8ieZDdmnnnRi4un","name":"Pete","roomId":"e7ehuii2qnt5weQgb","played":false,"score":0,"joined":true,"random":0.44454288529232144},{"_id":"AvoYQ29Ev6mS2JCmf","name":"James","roomId":"e7ehuii2qnt5weQgb","played":true,"score":0,"joined":true,"random":0.2457792074419558}],"room":{"_id":"e7ehuii2qnt5weQgb","rounds":0,"state":"' + this.props.params.roomState + '","roundStartTime":1461431035379,"roundDuration":15000,"pickedPlayerId":"AvoYQ29Ev6mS2JCmf","pickedMoleId":""}}');
      return fakeProps;
    }
    return this.props;
  }

  getRoomState() {
    if(this.props.room) {
      return this.props.room.state;
    }
    return null;
  }

  renderChild(props) {
    let roomState = this.getRoomState();
    switch(roomState) {
      case 'playerPicked':
        return <RoundReady {...props}/>;
      case 'molePicked':
        return <Round {...props} />;
      case 'roundEnded':
        return <RoundEnd {...props} />;
      case 'gameEnded':
        return <GameEnd {...props} />;
      default:
        return '';
    }
  }

  getRoundPlayer(props) {
    const players = props.players;
    const roundPlayerId = props.room.pickedPlayerId;
    let roundPlayer = null;
    players.forEach(player => {
      if(player._id === roundPlayerId) {
        roundPlayer = player;
      }
    });

    return roundPlayer;
  }

  renderRoundPlayer(props) {
    const roundPlayer = this.getRoundPlayer(props);
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

  renderPlayer(props) {
    const player = props.player;
    if(player.played) {
      return (
        <p>{player.name + '\'s score' + player.score}</p>
      );
    }
  }

  render() {

    const props = this.getProps();
    return (
      <div>
        {this.renderRoundPlayer(props)}
        <div>
          {this.renderChild(props)}
        </div>
        {this.renderPlayer(props)}
      </div>
    )
  }
}
