import styles from './start.mss'
import Title from '../../ui/title/title.jsx'
import Button from '../../ui/button/button.jsx'
import Paragraph from '../../ui/paragraph/paragraph.jsx'

export default class Start extends React.Component {

  goToJoin() {
    this.props.createRoom()
  }

  render() {
    return (
        <div className={styles.container}>
          <Title value="Welcome to" />
          <h1 className={styles.heroTitle}>Guac-a-mole</h1>
          <Paragraph>
            For 2 or more players.
          </Paragraph>
          <Paragraph>
            Create or join a game. Place all your devices on a table. Wait for all the players to join.
          </Paragraph>
          <Paragraph>
            Then tap as many moles as you can in 30 seconds.
          </Paragraph>
          <Paragraph>
            [credits]
          </Paragraph>
          <Button onClick={()=>this.goToJoin()}>Create a game</Button>
        </div>
    );
  }
}
