import styles from './gameLocation.mss';

export default class GameLocation extends React.Component {

  onClick (e) {
    e.preventDefault()
    console.log('clicked')
  }

  getURL() {
    const {hostname, port} = window.location
    return (port === 80)
              ? `http://${hostname}/join/${this.props.roomId}`
              : `http://${hostname}:${port}/join/${this.props.roomId}`
  }

  render() {
    const URL = this.getURL()
    return(
      <a className={styles.container} onClick={this.onClick.bind(this)} href={URL}>
        <span className={styles.title}>
          Visit this page to join the game
        </span>
        <span className={styles.url}>
          {URL}
        </span>
        <span className={styles.instructions}>
          Tap to copy to clipboard.
        </span>
      </a>
    )
  }
}
