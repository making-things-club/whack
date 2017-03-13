import styles from './textInput.mss';

export default class textInput extends React.Component {

  componentDidMount() {
    this.textInput.focus();
    const val = this.textInput.value;
    this.textInput.value = '';
    this.textInput.value = val;

    const element = ReactDOM.findDOMNode(this.textInput);
    element.setAttribute('autocapitalize', 'off');
    element.setAttribute('autocorrect', 'off');
    element.setAttribute('autocomplete', 'off');
    element.setAttribute('spellcheck', 'false');
    if (this.props.maxlength) {
      element.setAttribute('maxlength', this.props.maxlength);
    }
  }

  get value() {
    return this.textInput.value
  }

  render() {
    let onChange = this.props.onChange || function () {};
    return (
      <div>
        <label htmlFor="yourName" className={styles.label}>{this.props.label}</label>
        <input id="yourName"
          ref={(ref) => this.textInput = ref}
          type="text"
          required
          className={styles.input}
          value={this.props.defaultValue}
          onChange={onChange} />
      </div>
    )
  }
}
