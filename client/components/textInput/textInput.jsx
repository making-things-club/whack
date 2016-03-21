import styles from './textInput.mss';

export default class textInput extends React.Component {

  get value() {
    return this.textInput.value
  }

  render() {
    return (
      <label>
        <span className={styles.label}>{this.props.label}</span>
        <input ref={(ref) => this.textInput = ref} type="text" required className={styles.input} />
      </label>
    )
  }
}
