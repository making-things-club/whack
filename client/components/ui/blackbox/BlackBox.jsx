import getChildrenWithProps from '../../../utils/utils';
import styles from './blackBox.mss';

export default class BlackBox extends React.Component {

  render() {
    return (
      <div className={styles.blackBox}>
        {getChildrenWithProps(this.props.children, this.props)}
      </div>
    )
  }
}
