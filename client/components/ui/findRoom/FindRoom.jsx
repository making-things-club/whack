const { browserHistory } = ReactRouter;

import styles from './findRoom.mss';
import BlackBox from '../blackbox/BlackBox';
import Title from '../title/title.jsx'
import Paragraph from '../paragraph/paragraph.jsx'
import Button from '../button/button.jsx'
import TextInput from '../textInput/textInput.jsx'

export default class FindRoom extends React.Component {

  findRoom(e) {
    e.preventDefault();
    this.props.findRoom(this.roomCode.value);
  }

  goToHome(e) {
    e.preventDefault();
    browserHistory.push('/');
  }

  render() {
    let button;
    if(this.roomCode && this.roomCode.length < 1) {
      button = <Button disabled="true">Find</Button>
    } else {
      button = <Button onClick={(e)=>this.findRoom(e)}>Find</Button>
    }
    return(
      <div className={styles.container}>
        <BlackBox>
          <div>
            <Title value="Join game" />
          </div>
        </BlackBox>
        <form onSubmit={(e)=>this.findRoom(e)}>
          <TextInput
            ref={(ref) => this.roomCode = ref}
            maxlength="4"
            label="Enter game code" />
          <Paragraph>
            {this.props.error}
          </Paragraph>
          <div className={styles.buttons}>
            {button}
            <Button onClick={(e)=>this.goToHome(e)}>Back</Button>
          </div>
        </form>
      </div>
    )
  }
}
