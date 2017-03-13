.title {
  margin: 0 0 20px 0;
  text-align: center;
  font-size: 18px;
  color: white;
  font-style: italic;
  font-weight: bold;

  @media (min-height: 600px) {
    font-size: 25px;
  }
}

.playerList {
  box-sizing: border-box;
  display: block;
  margin: 0 20px;
  background-color: white;
  padding: 20px;
  text-align: center;
  min-height: 80px;
}

.player {
  display: inline-block;
  color: #5F4677;
  font-size: 18px;
  line-height: 20px;
}

.player:not(:last-child):after {
  content: ',';
  padding-right: 0.5em;
}
