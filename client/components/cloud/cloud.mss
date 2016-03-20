.cloudLeft {
    display: block;
    animation: leftToRight 25s linear infinite;
}

.cloudRight {
    display: block;
    animation: rightToLeft 30s linear infinite;
}

.cloud {
    width: 100px;
}

@keyframes leftToRight {
  from{
      transform: translateX(-10%);
  }
  to{
      transform: translateX(110%);
  }
}

@keyframes rightToLeft {
  from{
      transform: translateX(110%);
  }
  to{
      transform: translateX(-10%);
  }
}
