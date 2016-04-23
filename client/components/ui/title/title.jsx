import styles from './title.mss';

export default class Title extends React.Component {

  render() {
    return (
      <div className={styles.container} >
        <h2 className={styles.title}>{this.props.value}</h2>
        <div className={styles.horizontalRule} />
      </div>
    )
  }
}
