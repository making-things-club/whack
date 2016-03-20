import styles from './start.mss';
import Title from '../title/title.jsx'
import Button from '../button/button.jsx'

export default class Start extends React.Component {

  goToJoin() {
    this.props.createRoom();
  }

  render() {
    return (
        <div>
          <Title value="Welcome to" />
          <h2>The mole game.</h2>
          <Button onClick={()=>this.goToJoin()}>Create a game</Button>
        </div>
    );
  }
}
