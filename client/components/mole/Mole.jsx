import styles from './mole.mss';

export default class Mole extends React.Component {

  render() {

    return(
      <div className={styles.moleOuter}>
        <div className={styles.moleInner}>
          <img className={styles.mole} src="/images/mole-1.svg" alt="" />
        </div>
      </div>
    )
  }
}
