import Button from '../button/button.jsx'
import styles from './gameEnd.mss';

export default class GameEnd extends React.Component {

  renderPlayers() {
    return this.props.players.map((player)=>{
      return <p>{player.name + ': ' + player.score}</p>
    })
  }

  render() {
    return(
      <div>
        <p>Game End!</p>
        {this.renderPlayers()}
      </div>
    )
  }
}
