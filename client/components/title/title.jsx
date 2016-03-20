import styles from './title.mss';

export default class Title extends React.Component {

  render() {
    return (
      <div className={styles.container} >
        <h1 className={styles.title}>{this.props.value}</h1>
        <div className={styles.horizontalRule} />
      </div>
    )
  }
}
