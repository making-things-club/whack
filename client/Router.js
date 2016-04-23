const { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter;

import App from './components/app/App.jsx';
import Room from './components/room/Room.jsx';
import Start from './components/start/Start.jsx';
import Join from './components/join/Join.jsx';
import Ready from './components/ready/Ready.jsx';
import RoundReady from './components/roundReady/RoundReady.jsx';
import Round from './components/round/Round.jsx';
import RoundEnd from './components/roundEnd/RoundEnd.jsx';
import Leaderboard from './components/leaderboard/Leaderboard.jsx';

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
            <Route path="ready" component={Ready} />
            <Route path="round-ready" component={RoundReady} />
            <Route path="round" component={Round} />
            <Route path="round-end" component={RoundEnd} />
            <Route path="leaderboard" component={Leaderboard} />
          </Route>
        </Route>
      </Router>
    ), root);
  }
});
