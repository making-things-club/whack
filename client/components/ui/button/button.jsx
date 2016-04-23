import styles from './button.mss';

export default class Button extends React.Component {

  render() {
    return <button {...this.props} className={styles.button}>{this.props.children}</button>
  }
}
