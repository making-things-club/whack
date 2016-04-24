.title {
  margin-bottom: 9px;
  text-align: center;
  font-size: 25px;
  color: white;
  font-style: italic;
  font-weight: bold;
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
