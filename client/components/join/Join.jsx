import styles from './join.mss';

export default class Join extends React.Component {

  constructor() {
    super();
    this.state = {
      playerName: ''
    }
  }

  setPlayerName(e) {
    this.setState({playerName: e.target.value});
  }

  goToGame(e) {
    this.props.joinRoom(this.state.playerName);
  }

  render() {
    return(
      <div>
        <h1>Choose your Mole.</h1>
        <p>Share this URL to join the game.</p>
        <p><em>{this.props.params.roomId}</em></p>
        <div>
          <label>
            Your name
            <input
              type="text"
              value={this.state.playerName}
              onChange={(e)=>this.setPlayerName(e)}
            />
          </label>
        </div>
        <button onClick={()=>this.goToGame()}>Start game</button>
      </div>
    )
  }
}
