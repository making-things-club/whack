import styles from './credits.mss'


import Contributors from '../../ui/contributors/Contributors.jsx'
import Button from '../../ui/button/button.jsx'

export default class Credits extends React.Component {

  goToJoin() {
    this.props.createRoom()
  }
  
  render() {

    const contributors = {
      'Ian Been': 'http://yahoo.com',
      'James Booth': 'http://yahoo.com',
      'James Cooke': 'http://yahoo.com',
      'Judit Greskovits': 'http://yahoo.com',
      'Luke Davies': 'http://yahoo.com',
      'Pete Goodman': 'http://petegoodman.com',
      'Caz Lock': 'http://yahoo.com',
      'Remi Shergold': 'http://remi-shergold.com',
    }

    return(
      <div className={styles.container}>
        <Contributors people={contributors} />
        <Button onClick={()=>this.goToJoin()}>Create a new game</Button>
      </div>
    )
  }
}
