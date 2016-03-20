import styles from './flower.mss';

export default class Flower extends React.Component {

  render() {

    return(
      <img className={styles.flower} src="/images/flower.svg" alt="" />
    )
  }
}
