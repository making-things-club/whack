.container {
  position: relative;
  margin: 0 auto 0 auto;
  height: 150px;
  text-align: center;

  @media (min-height: 600px) {
    height: 200px;
  }
}

.bowl {
  position: absolute;
  top: 0;
  height: 140px;
  left: 50%;
  margin-left: -60px;

  @media (min-height: 600px) {
    height: 180px;
    margin-left: -80px;
  }
}

.logo {
  position: relative;
  top: 20px;
  max-width: 100%;
}
