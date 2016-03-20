const { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter;

import App from './components/app/App.jsx';
import Start from './components/start/Start.jsx';
import Join from './components/join/Join.jsx';
import Game from './components/game/Game.jsx';

Meteor.startup(function() {
  if(Meteor.isClient) {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);

    ReactDOM.render((
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Start} />
          <Route path="join/:roomId" component={Join} />
          <Route path="game" component={Game} />
        </Route>
      </Router>
    ), root);
  }
});
