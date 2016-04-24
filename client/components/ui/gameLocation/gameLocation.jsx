import styles from './gameLocation.mss';

export default class GameLocation extends React.Component {

  constructor() {
    super();
    this.state = {
      linkCopied: false
    }
  }

  componentDidMount() {
    var clipboard = new Clipboard(this.refs.button);
  }

  getURL() {
    const {hostname, port} = window.location
    return (port === 80)
              ? `${hostname}/room/join/${this.props.roomId}`
              : `${hostname}:${port}/room/join/${this.props.roomId}`
  }

  render() {
    const URL = this.getURL()
    const instruction = (this.state.linkCopied)
                          ? 'Copied to clipboard'
                          : 'Tap to copy to clipboard.'
    return(
        <button ref="button" className={styles.container} onClick={()=>this.setState({linkCopied:true })} data-clipboard-text={`http://${URL}`}>
          <span className={styles.instructions}>
            Share this link so others can join your game
          </span>
          <span className={styles.url}>
            {URL}
          </span>
          <span className={styles.instructions}>
            {instruction}
          </span>
        </button>
    )
  }
}
