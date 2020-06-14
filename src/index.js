import React from 'react';
import ReactDOM from 'react-dom';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';

import App from "./App";
import * as serviceWorker from './serviceWorker';

Bugsnag.start({
  apiKey: process.env.REACT_APP_BUGSNAG_API_KEY,
  plugins: [new BugsnagPluginReact()]
});

const ErrorBoundary = Bugsnag.getPlugin('react')
  .createErrorBoundary(React)

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root') || document.createElement('div'),
);

serviceWorker.unregister();

export default App;