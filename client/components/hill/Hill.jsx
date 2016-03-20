import styles from './hill.mss';
import Flower from '../flower/Flower';

export default class Hill extends React.Component {

  render() {

    return(
      <div className={styles.hill}>
        <div className={styles.flowerRightOuter}>
          <Flower />
        </div>
        <div className={styles.flowerRightInner}>
          <Flower />
        </div>
        <div className={styles.flowerLeftInner}>
          <Flower />
        </div>
        <div className={styles.flowerLeftOuter}>
          <Flower />
        </div>
      </div>
    )
  }
}
