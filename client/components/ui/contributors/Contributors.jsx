import styles from './contributors.mss'

export default class Contributors extends React.Component {

  render() {
    return(
      <div className={styles.container}>
        <h1 className={styles.title}>
          Credits
        </h1>
        <img className={styles.logo} src="/images/guacamole-logo.svg" />
        <p className={styles.subTitle} >
          Was created by...
        </p>
        { _.map(this.props.people, (website, name)=> <a className={styles.link} href={website}>{name}</a>) }
      </div>
    )
  }
}
