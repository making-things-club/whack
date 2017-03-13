.ingredientButton {
    display: block;
    position: absolute;
    z-index: 5;
    left: 0;
    right: 0;
    bottom: 80px;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.ingredient {
    /*animation: showIngredient 100ms ease-in;*/
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    margin: 0 auto;
    display: block;
}

.ingredientHit {
    composes: ingredient;
    /*animation: hideIngredient 100ms ease-in;*/
}

.avocado {
    composes: ingredient;
    background-image: url(images/ingredient-avocado.svg);
    width: 300px;
    height: 300px;
}

.lime {
    composes: ingredient;
    background-image: url(images/ingredient-lime.svg);
    width: 300px;
    height: 300px;
}

.garlic {
    composes: ingredient;
    background-image: url(images/ingredient-garlic.svg);
    width: 300px;
    height: 300px;
}

.avocadoHit {
    composes: ingredientHit;
    background-image: url(images/ingredient-avocado-hit.svg);
    width: 300px;
    height: 300px;
}

.limeHit {
    composes: ingredientHit;
    background-image: url(images/ingredient-lime-hit.svg);
    width: 300px;
    height: 300px;
}

.garlicHit {
    composes: ingredientHit;
    background-image: url(images/ingredient-garlic-hit.svg);
    width: 300px;
    height: 300px;
}

@keyframes showIngredient {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes hideIngredient {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}
