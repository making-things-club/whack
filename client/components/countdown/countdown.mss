.countdownContainer {
    width: 80%;
    height: 100px;
    background: #333;
    border: 10px solid #fff;
    position: relative;
}

.countdownBar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;

    /* animation, duration, ease, delay */
    animation: countdownBar 30s linear 6s;
}

@keyframes countdownBar {
  0% {
    width: 0;
    background: #f60;
  }

  100% {
    width: 100%;
    background: #f90;
  }
}
