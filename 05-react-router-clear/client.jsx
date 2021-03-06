import React from 'react';
import { render } from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
// import { Router, browserHistory } from 'react-router';

import routes from './server/routes.jsx';

render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
);
