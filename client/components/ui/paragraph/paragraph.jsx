import styles from './paragraph.mss';

export default class Paragraph extends React.Component {

  render() {
    return <p className={styles.paragraph} {...this.props}>{this.props.children}</p>
  }
}
