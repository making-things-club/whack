const { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter;

import App from './components/app/App.jsx';
import Room from './components/routes/room/Room.jsx';
import Start from './components/routes/start/Start.jsx';
import Join from './components/routes/join/Join.jsx';
import Ready from './components/routes/ready/Ready.jsx';
import Game from './components/game/game/Game.jsx';

Meteor.startup(function() {
  if(Meteor.isClient) {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);

    ReactDOM.render((
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Start} />
          <Route path="room" component={Room}>
            <Route path="join/:roomId" component={Join} />
            <Route path="game" component={Ready} /> // TODO rename to Game
            <Route path="dev/:roomState" component={Game} />
          </Route>
        </Route>
      </Router>
    ), root);
  }
});
