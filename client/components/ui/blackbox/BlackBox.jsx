import getChildrenWidthProps from '../../../utils/utils';
import styles from './blackBox.mss';

export default class BlackBox extends React.Component {

  render() {
    return (
      <div className={styles.blackBox}>
        {getChildrenWidthProps(this.props.children, this.props)}
      </div>
    )
  }
}
