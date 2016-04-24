.button {
  position: fixed;
  bottom: 15px;
  left: 5%;
  width: 90%;
  background-color: $black;
  color: white;
  border: 6px solid;
  border-radius: 66px;
  line-height: 66px;
  font-size: 25px;
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
