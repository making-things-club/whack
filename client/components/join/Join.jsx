import styles from './join.mss';
import MoleSelector from '../moleSelector/MoleSelector.jsx';
const { browserHistory } = ReactRouter;

export default class Join extends React.Component {

  constructor() {
    super();
    this.state = {
      playerName: '',
      mole: null,
    }

    this.moles = [
      {id: 0, name: 'Rodger', image: ''},
      {id: 1, name: 'Dave', image: ''},
      {id: 2, name: 'Jeff', image: ''}
    ]
  }

  setPlayerName(e) {
    this.setState({playerName: e.target.value});
  }

  setMole(selectedMole) {
    this.setState({mole: selectedMole});
  }

  goToGame(e) {
    e.preventDefault();
    this.props.joinRoom(this.state.playerName, this.state.mole);
    browserHistory.push(`/game/${this.props.params.gameName}`);
  }

  render() {
    return(
      <div>
        <h1>Choose your Mole.</h1>
        <p>Visit this URL to join the game.</p>
        <a href={this.props.params.gameName}>{this.props.params.gameName}</a>
        <form>
          <label>
            Your name
            <input
              type="text"
              value={this.state.playerName}
              onChange={(e)=>this.setPlayerName(e)}
            />
          </label>
          <MoleSelector onSelect={this.setMole.bind(this)} moles={this.moles}/>

          <button onClick={(e)=>this.goToGame(e)}>Start game</button>
        </form>
      </div>
    )
  }
}
