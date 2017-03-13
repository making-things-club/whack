import styles from './credits.mss'

const { browserHistory } = ReactRouter;
import Contributors from '../../ui/contributors/Contributors.jsx'
import Button from '../../ui/button/button.jsx'

export default class Credits extends React.Component {

  goToHome() {
    browserHistory.push('/');
  }

  render() {
    const contributors = {
      'Iain Bean': 'http://iainbean.com',
      'James Booth': 'http://jamesbooth.net/',
      'James Cooke': 'http://jamescooke.info/',
      'Judit Greskovits': 'http://www.juditgreskovits.com/',
      'Luke Davies': 'http://www.lukehmu.com',
      'Pete Goodman': 'https://petegoodman.com',
      'Caz Lock': 'http://cazlock.com',
      'Remi Shergold': 'http://remi-shergold.com',
    }

    return(
      <div className={styles.container}>
        <Contributors people={contributors} />
        <div className={styles.buttons}>
          <Button onClick={()=>this.goToHome()}>Back</Button>
        </div>
      </div>
    )
  }
}
