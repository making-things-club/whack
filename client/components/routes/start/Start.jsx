import styles from './start.mss';
import Title from '../../ui/title/title.jsx';
import Bowl from '../../ui/bowl/Bowl.jsx';
import Button from '../../ui/button/button.jsx';
import Paragraph from '../../ui/paragraph/paragraph.jsx';

export default class Start extends React.Component {

  goToJoin() {
    this.props.createRoom()
  }

  render() {
    return (
        <div className={styles.container}>
          <Title value="Welcome to" />
          <Bowl />
          <Paragraph>
            For 2 or more players.
          </Paragraph>
          <Paragraph>
            Create or join a game. Place all your devices on a table. Wait for all the players to join.
          </Paragraph>
          <Paragraph>
            Then tap as many moles as you can in 30 seconds.
          </Paragraph>
          <a className={styles.link} href="/credits">Credits</a>
          <Button onClick={()=>this.goToJoin()}>Create a game</Button>
        </div>
    );
  }
}
