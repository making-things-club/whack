import styles from './MoleSelector.mss';

export default class MoleSelector extends React.Component {

  render() {
    const moles = this.props.moles.map((mole)=>{
      return (
        <label>
          <input type="radio" name="mole" value={mole.id} onChange={()=>this.props.onSelect(mole)}/>
          {mole.name}
        </label>
      )
    })
    return (
      <div>{moles}</div>
    )
  }
}
