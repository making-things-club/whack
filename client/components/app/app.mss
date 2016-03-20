html,
body {
    padding: 0;
    margin: 0;
}

.app {
    background: linear-gradient(to bottom, rgba(81,171,191,1) 0%, rgba(124,207,220,1) 100%);
    position: relative;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
}

.game {
    position: relative;
    z-index: 4;
    max-width: 500px;
    margin: 0 auto;
    padding: 10px 20px;
}

.hill {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
}

.cloudLeft {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    z-index: 1;
}

.cloudRight {
    position: absolute;
    top: 120px;
    left: 0;
    right: 0;
    z-index: 2;
}
