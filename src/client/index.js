import 'babel-polyfill';
import 'whatwg-fetch';

import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import {AppContainer} from 'react-hot-loader';
import {syncHistoryWithStore} from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createBrowserHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';
import Router from './router';
import muiTheme from './muiTheme';

// global styles
import './style.scss';

injectTapEventPlugin();



const history = syncHistoryWithStore(createBrowserHistory(), store);

const render = (AppRouter) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <IntlProvider locale="en">
          <MuiThemeProvider muiTheme={muiTheme}>
            <AppRouter history={history} />
          </MuiThemeProvider>
        </IntlProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Router);

// need to re-mount app component on hot reload
if (module.hot) {
  module.hot.accept('./router.js', () => {
    render(require('./router').default);
  });
}
