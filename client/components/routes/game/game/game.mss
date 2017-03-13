.roundPlayer {
    position: relative;
    z-index: 2;
    text-align: center;
}

.roundPlayerTitle {
    composes: roundPlayer;
    font-size: 1.8rem;
    font-weight: 100;
    font-style: italic;
    font-family: $font-serif;
    color: white;
    margin: 0;
}

.roundPlayerSubtitle {
    composes: roundPlayer;
    font-size: 0.9rem;
    color: $lightBrown;
    font-family: $font-serif;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
}

.roundPlayerScore {
    composes: roundPlayer;
    font-size: 4rem;
    font-family: $font-sans;
    color: white;
    margin: 0;
}
