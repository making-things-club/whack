
.title {
  font-style: italic;
  color: white;
  font-weight: 100;
  font-size: 1.4rem;
  margin: 10px 0;
  text-align: center;

  @media (min-height: 600px) {
    font-size: 2rem;
    margin: 15px 0;
  }
}

.logo {
  box-sizing: border-box;
  width: 100%;
  padding: 0 1rem;
}

.subTitle {
  color: $lightBrown;
  text-transform: uppercase;
  text-align: center;
  margin: 5px 0;
  position: relative;
  top: -0.5rem;
  font-size: 1rem;
}

.link {
  display: inline-block;
  width: 47.5%;
  color: white;
  margin-bottom: 0.5rem;
  font-family: $font-sans;
  font-size: 1rem;
  text-align: center;

  @media (min-height: 600px) {
    display: block;
    width: 100%;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
}
