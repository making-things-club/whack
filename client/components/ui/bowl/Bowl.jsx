import styles from './bowl.mss';

export default class Start extends React.Component {

  render() {
    return (
        <div className={styles.container}>
          <img src='images/guacamole-bowl.svg' className={styles.bowl}/>
          <img src='images/guacamole-logo.svg' className={styles.logo} />
        </div>
    );
  }
}
