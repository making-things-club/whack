import styles from './start.mss';
import Button from '../button/button.jsx'

export default class Start extends React.Component {

  goToJoin() {
    this.props.createRoom();
  }

  render() {
    return (
        <div>
          <h1>Welcome.</h1>
          <h2>The mole game.</h2>
          <Button onClick={()=>this.goToJoin()}>Create a game</Button>
        </div>
    );
  }
}
