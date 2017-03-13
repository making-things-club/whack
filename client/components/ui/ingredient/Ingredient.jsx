import styles from './ingredient.mss';

export default class Ingredient extends React.Component {

  constructor() {
    super();
    this.state = this.setInitialIngredientState();
  }

  ingredientClicked (e) {
    e.preventDefault();
    e.target.blur();

    if (!this.state.isHit) {
      this.props.ingredientClick();
      this.setState({isHit: true});
    }
  }

  setInitialIngredientState () {
    let rand = Math.floor(Math.random() * 10) + 1;
    let ingredient = null;

    if (rand < 5) {
      ingredient = 'avocado';
    } else if (rand < 7) {
      ingredient = 'garlic';
    } else {
      ingredient = 'lime';
    }

    return {
      ingredient,
      isHit: false
    };
  }

  render() {
    let ingredient = this.state.ingredient;
    if (this.state.isHit) { ingredient += 'Hit'; }
    return (
      <a href="#" className={styles.ingredientButton} onClick={(e)=>this.ingredientClicked(e)}>
        <span className={styles[ingredient]}></span>
      </a>
    );
  }
}
