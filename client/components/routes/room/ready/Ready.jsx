const { browserHistory } = ReactRouter;

import styles from './ready.mss';
import BlackBox from '../../../ui/blackbox/BlackBox';
import Title from '../../../ui/title/title.jsx'
import Paragraph from '../../../ui/paragraph/paragraph.jsx'
import PlayersList from '../../../ui/playersList/playersList.jsx'
import Button from '../../../ui/button/button.jsx'

export default class Ready extends React.Component {

  constructor(props) {
    super(props);

    if(!props.room) {
      browserHistory.push('/');
    }

    this.state = {
      disabled: false
    }
  }

  goToGame(e) {
    this.props.startRound();
    this.setState({disabled: true});
  }

  renderButton() {

    const disabled = this.state.disabled;
    if(disabled || this.props.players.length < 2) {
      return <Button disabled="true">Waiting for players...</Button>
    }
    return <Button onClick={()=>this.goToGame()}>Start the game</Button>
  }

  render() {
    const title = (this.props.room) ? this.props.room.roomCode : "";
    return(
      <div>
        <BlackBox>
          <div>
            <Title value="Preparing the ingredients..." />
            <Paragraph>
              Share this code with others:
            </Paragraph>
            <Title value={title} />
          </div>
        </BlackBox>
        <PlayersList players={this.props.players} />
        <div className={styles.buttons}>
          {this.renderButton()}
        </div>
      </div>
    )
  }
}
