import styles from './start.mss';
import Title from '../title/title.jsx'
import Button from '../button/button.jsx'
import Paragraph from '../paragraph/paragraph.jsx'

export default class Start extends React.Component {

  goToJoin() {
    this.props.createRoom();
  }

  render() {
    return (
        <div>
          <Title value="Welcome to" />
          <h1 className={styles.heroTitle}>Holey Moley</h1>
          <Paragraph>
            For 2 or more players.
          </Paragraph>
          <Paragraph>
            Create or join a game. Place all your devices on a table. Wait for all the players to join.
          </Paragraph>
          <Paragraph>
            Then tap as many moles as you can in 30 seconds.
          </Paragraph>
          <Button onClick={()=>this.goToJoin()}>Create a game</Button>
        </div>
    );
  }
}
