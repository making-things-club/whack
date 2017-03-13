.roundText {
  animation: scaleUp 1s linear 4;
  transform: scale(3) translateY(100%);
  transform-origin: 50% 100%;
}

@keyframes scaleUp {
  0%, 10% { transform: scale(0) translateY(100%); opacity: 0; }
  90%, 100% { transform: scale(3) translateY(100%); opacity: 1; }
}

.phonePlayer {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
