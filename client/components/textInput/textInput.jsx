import styles from './textInput.mss';

export default class textInput extends React.Component {

  render() {
    return <input type="text" {...this.props} className={styles.input} />
  }
}
