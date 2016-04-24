.button {
  position: fixed;
  bottom: 15px;
  left: 5%;
  width: 90%;
  background-color: $black;
  color: white;
  border: 6px solid;
  border-radius: 66px;
  font-family: $font-sans;
  font-size: 25px;
  padding: 10px 0;
  outline: none;
  cursor: pointer;
  transition: background 200ms;
}

.button:hover {
  background-color: #444;
}

.button: active {
  background-color: $white;
  color: $black;
  outline: none;
}

.button:disabled {
  background-color: transparent;
}
