import Button from '../button/button.jsx'
import styles from './roundEnd.mss';

export default class RoundEnd extends React.Component {

  goToGame(e) {
    this.props.startRound();
  }

  render() {
    return(
      <div>
        <p>Round End!</p>
        <Button onClick={()=>this.goToGame()}>Start game</Button>
      </div>
    )
  }
}
