.title {
  margin-bottom: 9px;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 4px 4px 0px rgba(95,70,119,0.2);
  font-size: 25px;
  color: white;
}

.playerList {
  box-sizing: border-box;
  display: block;    
  margin: 0 20px;
  background-color: white;
  padding: 20px;
  text-align: center;
  min-height: 80px;
  box-shadow: 4px 5px 0px 0px rgba(181,163,199,0.5);
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