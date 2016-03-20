import styles from './start.mss';

export default class Start extends React.Component {

  goToJoin() {
    this.props.createRoom();
  }

  render() {
    return (
        <div>
          <h1>Welcome.</h1>
          <h2>The mole game.</h2>
          <button onClick={()=>this.goToJoin()}>Create a game</button>
        </div>
    );
  }
}
