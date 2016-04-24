import styles from './ingredient.mss';

export default class Ingredient extends React.Component {

  constructor() {
    super();
    this.state = this.setInitialIngredientState();
  }

  ingredientClicked (e) {
    e.preventDefault();
    this.setState({isHit: true});

    setTimeout(() => {
      this.setState(this.setInitialIngredientState());
      this.props.ingredientClick()
    }, 500);
  }

  setInitialIngredientState () {
    let rand = Math.floor(Math.random() * 10) + 1;
    let ingredient = null;

    if (rand < 7) {
      ingredient = 'avocado';
    } else if (rand < 9) {
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
      <a href="#" className={styles.ingredient} onClick={(e)=>this.ingredientClicked(e)}>
        <span className={styles[ingredient]}></span>
      </a>
    );
  }
}
