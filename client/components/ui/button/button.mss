.button {
  background-color: $black;
  color: white;
  border: 6px solid;
  border-radius: 66px;
  font-family: $font-sans;
  font-size: 25px;
  padding: 10px 0;
  margin: 5px;
  outline: none;
  cursor: pointer;
  transition: background 200ms;
  flex: 1;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.button:hover {
  background-color: #444;
}

.button:active {
  background-color: $white;
  color: $black;
  outline: none;
}

.button:disabled {
  background-color: transparent;
}
