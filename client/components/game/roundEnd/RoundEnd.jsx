import BlackBox from '../../ui/blackbox/BlackBox';
import Button from '../../ui/button/button.jsx'
import styles from './roundEnd.mss';

export default class RoundEnd extends React.Component {

  goToGame(e) {
    this.props.startRound();
  }

  render() {
    return(
      <div>
        <BlackBox>
          <p>Round End!</p>
        </BlackBox>
        <Button onClick={()=>this.goToGame()}>Start game</Button>
      </div>
    )
  }
}
