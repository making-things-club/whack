import styles from './hill.mss';
import Flower from '../flower/Flower';
import HoleBackground from '../holeBackground/HoleBackground';
import HoleForeground from '../holeForeground/HoleForeground';
import Mole from '../mole/Mole';

export default class Hill extends React.Component {

  render() {

    return(
      <div className={styles.hill}>
        <div className={styles.holeBackground}>
          <HoleBackground />
        </div>
        <div className={styles.mole}>
          <Mole />
        </div>
        <div className={styles.holeForeground}>
          <HoleForeground />
        </div>
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
