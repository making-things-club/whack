import styles from './cloud.mss';

export default class Cloud extends React.Component {

  render() {
    return(
      <div className={this.props.direction == 'left' ? styles.cloudLeft : styles.cloudRight }>
        <img className={styles.cloud} src={`/images/cloud-${this.props.direction}.svg`} alt="" />
      </div>
    )
  }
}
