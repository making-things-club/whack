import styles from './ingredient.mss';

export default class Ingredient extends React.Component {

  constructor() {
    super();
    this.preloadImages();
    this.state = this.setInitialIngredientState();
  }

  preloadImages () {
    const ingredients = ['avocado', 'garlic', 'lime'];
    ingredients.forEach((ingredient) => {
      var img = new Image();
      var imgHit = new Image();
      img.src = `/images/ingredient-${ingredient}.svg`;
      imgHit.src = `/images/ingredient-${ingredient}-hit.svg`;
      img.onload = (e) => { console.log(e, this, 'loaded'); };
    });
  }

  ingredientClicked (e) {
    e.preventDefault();

    if (!this.state.isHit) {
      //setTimeout(() => {
        this.setState(this.setInitialIngredientState());
        this.props.ingredientClick();
      //}, 500);
      this.setState({isHit: true});
    }
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
      <a href="#" className={styles.ingredientButton} onClick={(e)=>this.ingredientClicked(e)}>
        <span className={styles[ingredient]}></span>
      </a>
    );
  }
}
