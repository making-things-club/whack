import TrackerReact from 'meteor/ultimatejs:tracker-react';
import styles from './app.mss';

const { browserHistory } = ReactRouter;

export default class App extends TrackerReact(React.Component, {profiling : false}) {

  componentWillMount() {
    const pathname = this.props.location.pathname;
    if(pathname !== '/') {
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    )
  }
}
