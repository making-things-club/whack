import BlackBox from '../../../ui/blackbox/BlackBox';
import Countdown from '../../../ui/countdown/Countdown';
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

    const progress = Math.ceil(((props.room.roundDuration - props.room.roundDurationRemaining) / props.room.roundDuration) * 100);

    if(roundPlayer) {
      return (
        <BlackBox>
          <div>
            <p className={styles.roundPlayerTitle}>{roundPlayer.name + '\'s'}</p>
            <p className={styles.roundPlayerSubtitle}>score</p>
            <p className={styles.roundPlayerScore}>{roundPlayer.score}</p>
            <Countdown progress={progress} />
          </div>
        </BlackBox>
      );
    }
  }

  render() {
    const props = this.getProps();
    return <div>{this.renderChild(props)}</div>;
  }
}
