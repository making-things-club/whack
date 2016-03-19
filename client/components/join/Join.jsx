import styles from './join.mss';

const { browserHistory } = ReactRouter;

export default class Join extends React.Component {

  goToGame() {
    browserHistory.push(`/game/${this.props.params.gameName}`);
  }

  render() {
    return(
      <div>
        <h1>Game Name: {this.props.params.gameName}</h1>
        <p className={styles.join}>Waiting for players</p>
        <button onClick={()=>this.goToGame()}>Start game</button>
      </div>
    )
  }
}
