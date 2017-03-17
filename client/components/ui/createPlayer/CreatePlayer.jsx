const { browserHistory } = ReactRouter;

import styles from './createPlayer.mss';
import BlackBox from '../blackbox/BlackBox';
import Title from '../title/title.jsx'
import Paragraph from '../paragraph/paragraph.jsx'
import Button from '../button/button.jsx'
import TextInput from '../textInput/textInput.jsx'

export default class CreatePlayer extends React.Component {

  constructor(props) {
    super(props);
    presetName = window.localStorage.getItem('name') || '';
    this.state = {
      name: presetName
    };
  }

  goToHome(e) {
    e.preventDefault();
    browserHistory.push('/');
  }

  onCreatePlayer(e) {
    e.preventDefault();
    window.localStorage.setItem('name', this.state.name);
    this.props.createPlayer(this.state.name);
  }

  handleTextUpdate(e) {
    this.setState({'name': e.target.value});
  }

  render() {
    let button;
    if(this.state.name.length < 1) {
      button = <Button disabled="true">Next</Button>
    } else {
      button = <Button onClick={(e)=>this.onCreatePlayer(e)}>Next</Button>
    }
    return(
      <div className={styles.container}>
        <BlackBox>
          <div>
            <Title value={this.props.title} />
          </div>
        </BlackBox>
        <form onSubmit={(e)=>this.onCreatePlayer(e)}>
          <TextInput
            label="Enter your name"
            defaultValue={this.state.name}
            onChange={(e)=>this.handleTextUpdate(e)} />
          <div className={styles.buttons}>
            {button}
            <Button onClick={(e)=>this.goToHome(e)}>Back</Button>
          </div>
        </form>
      </div>
    )
  }
}
