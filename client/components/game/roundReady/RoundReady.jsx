import BlackBox from '../../ui/blackbox/BlackBox';
import styles from './roundReady.mss';

export default class RoundReady extends React.Component {

  render() {
    return(
      <div>
        {this.props.renderRoundPlayer(this.props)}
        <p>Get ready!</p>
      </div>
    )
  }
}
