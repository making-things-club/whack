const { browserHistory } = ReactRouter;

export default class Start extends React.Component {

  constructor() {
    super();
    this.state = { gameName: ''}
  }

  goToJoin(e) {
    e.preventDefault();
    const gameName = this.state.gameName.replace(/[^a-zA-Z0-9-_]/g, '-');
  }

  setGameName(e) {
    this.setState({gameName: e.target.value});
  }

  render() {
    return (
        <div>
          <h1>Welcome.</h1>
          <h2>The mole game.</h2>
          <form onSubmit={(e)=>this.goToJoin(e)}>
            <label>Room name</label>
            <input
              type="text"
              value={this.state.gameName}
              onChange={(e)=>this.setGameName(e)}
            />
            <button type="submit" disabled={!this.state.gameName}>Create a game</button>
          </form>
        </div>
    );
  }
}
