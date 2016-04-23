import Button from '../button/button.jsx'
import styles from './gameEnd.mss';

export default class GameEnd extends React.Component {

  renderPlayers() {
    return this.props.players.map((player)=>{
      var currentPlayer = (player._id === this.props.player._id) ? ' (You!)' : '';
      return(
        <p>
          {player.name + ': ' + player.score}
          <span>{currentPlayer}</span>
        </p>
      )
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
