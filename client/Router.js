const { Router, Route, IndexRoute, browserHistory } = ReactRouter;

import App from './components/app/App';
import Home from './components/routes/home/Home';
import Credits from './components/routes/credits/Credits';
import Room from './components/routes/room/room/Room';
import Create from './components/routes/room/create/Create';
import Join from './components/routes/room/join/Join';
import Ready from './components/routes/room/ready/Ready';
import Game from './components/routes/game/game/Game';

Meteor.startup(function() {
  if(Meteor.isClient) {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);

    ReactDOM.render((
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="credits" component={Credits} />
          <Route path="room" component={Room}>
            <Route path="create" component={Create} />
            <Route path="join" component={Join} />
            <Route path="ready" component={Ready} />
            <Route path="game" component={Game} />
          </Route>
        </Route>
      </Router>
    ), root);
  }
});
