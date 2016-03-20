import styles from './ready.mss';

export default class Ready extends React.Component {

  goToGame(e) {
    this.props.startRound();
  }

  render() {
    return(
      <div>
        <h1>Place your phone down on a table.</h1>
        <p>Share this URL to join the game.</p>
        <p><em>{this.props.params.roomId}</em></p>
        <p>Waiting for all the players to join before starting the game</p>
        <button onClick={()=>this.goToGame()}>Start game</button>
      </div>
    )
  }
}
