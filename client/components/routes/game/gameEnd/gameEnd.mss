.gameEnd {
  position: absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  bottom: 10px;
  overflow-y: scroll;
  padding-bottom: 150px;
}

.boxContainer {
  margin-bottom: 100px;

  @media (min-height: 600px) {
    margin-bottom: 146px;
  }
}

.subtitle {
  display: block;
  width: 100%;
  margin-bottom: 15px;
  font-size: 14px;
  color: $lightBrown;
  text-transform: uppercase;
  text-align: center;
}

.name {
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  color: white;
  font-family: $font-serif;
  font-size: 20px;

  @media (min-height: 600px) {
    margin-top: 20px;
    font-size: 30px;
  }
}

.featureImage {
  position: absolute;
  width: 200px;
  left: 50%;
  margin-left: -100px;

  @media (min-height: 600px) {
    margin-left: -123px;
    width: 246px;
  }
}

.buttons {
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
}
