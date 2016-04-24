import styles from './ready.mss';
import BlackBox from '../../ui/blackbox/BlackBox';
import Title from '../../ui/title/title.jsx'
import GameLocation from '../../ui/gameLocation/gameLocation.jsx'
import Paragraph from '../../ui/paragraph/paragraph.jsx'
import PlayersList from '../../ui/playersList/playersList.jsx'
import Button from '../../ui/button/button.jsx'

export default class Ready extends React.Component {

  constructor(props) {
    super(props);

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
    if(disabled) {
      return <Button disabled="true">Waiting...</Button>
    }
    return <Button onClick={()=>this.goToGame()}>Start the game</Button>
  }

  render() {
    return(
      <div>
        <BlackBox>
          <Title value="Preparing the ingredients" />
          <GameLocation roomId={this.props.roomId} />
        </BlackBox>
        <Paragraph>
          Wait for all the players to join before you start the game!
        </Paragraph>
        <PlayersList players={this.props.players} />
        {this.renderButton()}
      </div>
    )
  }
}
