import styles from './countdown.mss';

export default class Countdown extends React.Component {

  render() {
    return(
      <div className={styles.countdownContainer}>
        <div className={styles.countdownBar}></div>
        <p>Countdown...</p>
      </div>
    )
  }
}
