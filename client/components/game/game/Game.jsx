import BlackBox from '../../ui/blackbox/BlackBox';
import Countdown from '../../ui/countdown/Countdown';
import RoundReady from '../roundReady/RoundReady';
import Round from '../round/Round';
import RoundEnd from '../roundEnd/RoundEnd';
import GameEnd from '../gameEnd/GameEnd';
import styles from './game.mss';

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
        return <RoundReady renderRoundPlayer={this.renderRoundPlayer} {...props}/>;
      case 'molePicked':
        return <Round renderRoundPlayer={this.renderRoundPlayer} {...props} />;
      case 'roundEnded':
        return <RoundEnd renderRoundPlayer={this.renderRoundPlayer} {...props} />;
      case 'gameEnded':
        return <GameEnd {...props} />;
      default:
        return '';
    }
  }

  renderRoundPlayer(props) {
    const players = props.players;
    const roundPlayerId = props.room.pickedPlayerId;
    let roundPlayer = null;
    players.forEach(player => {
      if(player._id === roundPlayerId) {
        roundPlayer = player;
      }
    });

    if(roundPlayer) {
      return (
        <BlackBox>
          <div className={styles.roundPlayer}>
            <p className={styles.roundPlayerTitle}>{roundPlayer.name + '\'s'}</p>
            <p className={styles.roundPlayerSubtitle}>score</p>
            <p className={styles.roundPlayerScore}>{roundPlayer.score}</p>
          </div>
          <Countdown />
        </BlackBox>
      );
    }
  }

  render() {
    const props = this.getProps();
    return <div>{this.renderChild(props)}</div>;
  }
}
