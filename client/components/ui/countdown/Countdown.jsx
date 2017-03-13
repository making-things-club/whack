import styles from './countdown.mss';

export default class Countdown extends React.Component {

  render() {
    return(
      <div
        className={styles.countdownBar}
        style={{width: `${this.props.progress}%`}}
      />
    )
  }
}
