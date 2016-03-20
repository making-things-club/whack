import styles from './textInput.mss';

export default class textInput extends React.Component {

  render() {
    return (
      <label>
        <span className={styles.label}>{this.props.label}</span>
        <input type="text" required className={styles.input} {...this.props} />
      </label>
    )
  }
}
