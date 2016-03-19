const { browserHistory } = ReactRouter;

export default class Start extends React.Component {

  constructor() {
    super();
    this.state = { value: ''}
  }

  goToGame() {
    const gameName = this.state.gameName.replace(/[^a-zA-Z0-9-_]/g, '-');
    browserHistory.push(`/g/${gameName}`);
  }

  setGameName(e) {
    this.setState({gameName:e.target.value});
  }

  render() {
    return (
        <div>
          <form onSubmit={()=>this.goToGame()}>
            <label>Give your game a name</label>
            <input
              type="text"
              value={this.state.gameName}
              onChange={(e)=>this.setGameName(e)}
            />
            <button type="submit">Go</button>
          </form>
        </div>
    );
  }
}
