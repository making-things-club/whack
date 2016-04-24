import BlackBox from '../../ui/blackbox/BlackBox';
import Button from '../../ui/button/button.jsx'
import styles from './roundEnd.mss';

export default class RoundEnd extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      disabled: false
    }
  }

  goToGame(e) {
    this.props.startRound();
    this.setState({disabled: true});
  }

  renderButton() {

    const disabled = this.state.disabled;
    if(disabled) {
      return <Button disabled="true">Waiting...</Button>
    }
    return <Button onClick={()=>this.goToGame()}>Start next round</Button>
  }

  render() {
    return(
      <div>
        {this.props.renderRoundPlayer(this.props)}
        <p>Round over!</p>
        {this.renderButton()}
      </div>
    )
  }
}
