import Title from '../../../ui/title/title.jsx';
import BlackBox from '../../../ui/blackbox/BlackBox';
import styles from './roundReady.mss';


export default class RoundReady extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentCountdownValue: 0,
      supportsVibration : ('vibrate' in navigator)
    };
    this.countdownStrings = [3, 2, 1];
  }

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this.roundText);
    element.addEventListener('animationiteration', this.updateCountdownValue.bind(this));
  }

  updateCountdownValue() {
    const nextCountdownValue = ++this.state.currentCountdownValue;
    this.setState({'currentCountdownValue': nextCountdownValue});
  }

  renderYourGo() {
    if (this.props.player._id === this.props.room.pickedPlayerId) {
      if (this.state.supportsVibration) {
        window.navigator.vibrate(1000);
      }
      return (
        <Title value={`Your go ${this.props.player.name}!`} />
      );
    }
  }

  render() {
    return(
      <div>
        {this.props.renderRoundPlayer(this.props)}
        <div className={styles.roundText} ref={(ref) => this.roundText = ref}>
          <Title value={this.countdownStrings[this.state.currentCountdownValue]} />
        </div>
        <div className={styles.phonePlayer}>
          {this.renderYourGo()}
        </div>
      </div>
    )
  }
}
