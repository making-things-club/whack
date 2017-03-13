import styles from './home.mss';
import Title from '../../ui/title/title.jsx';
import Bowl from '../../ui/bowl/Bowl.jsx';
import Button from '../../ui/button/button.jsx';
import Paragraph from '../../ui/paragraph/paragraph.jsx';

const { Link, browserHistory } = ReactRouter;

export default class Home extends React.Component {

  goToCreate() {
    browserHistory.push('/room/create');
  }

  goToJoin() {
    browserHistory.push('/room/join');
  }

  render() {
    return (
        <div className={styles.container}>
          <Title value="Welcome to" />
          <Bowl />
          <Paragraph>
            For 2 or more players.
            Place all your devices on a table.
            Wait for all players to join.
          </Paragraph>
          <Paragraph>
            Then tap as many moles as you can in 30 seconds.
          </Paragraph>
          <Link className={styles.link} to="/credits">Credits</Link>
          <div className={styles.buttons}>
            <Button onClick={()=>this.goToCreate()}>Create</Button>
            <Button onClick={()=>this.goToJoin()}>Join</Button>
          </div>
        </div>
    );
  }
}
