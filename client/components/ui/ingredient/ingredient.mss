.ingredient {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100px;
}

.avocado {
    display: block;
    background: url(images/ingredient-avocado.svg);
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
}

.lime {
    display: block;
    background: url(images/ingredient-lime.svg);
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
}

.garlic {
    display: block;
    background: url(images/ingredient-garlic.svg);
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
}

.avocadoHit {
    animation: hitState 500ms linear;
    display: block;
    background: url(images/ingredient-avocado-hit.svg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 300px;
    height: 300px;
}

.limeHit {
    animation: hitState 500ms linear;
    display: block;
    background: url(images/ingredient-lime-hit.svg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 300px;
    height: 300px;
}

.garlicHit {
    animation: hitState 500ms linear;
    display: block;
    background: url(images/ingredient-garlic-hit.svg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 300px;
    height: 300px;
}

@keyframes hitState {
  0% {

  }

  100% {
    width: 50%;
    height: 50%;
    left: 100%;
  }
}
