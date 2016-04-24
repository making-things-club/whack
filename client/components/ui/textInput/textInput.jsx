import styles from './textInput.mss';

export default class textInput extends React.Component {

  get value() {
    return this.textInput.value
  }

  render() {
    return (
      <div>
        <label htmlFor="yourName" className={styles.label}>{this.props.label}</label>
        <input id="yourName" ref={(ref) => this.textInput = ref} type="text" required className={styles.input} />
      </div>
    )
  }
}
