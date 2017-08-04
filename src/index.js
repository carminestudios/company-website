import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import ConnectedIntlProvider from './ConnectedIntlProvider';

import configureStore from './store';
import App from './App';
import './index.css';

// If Sentry.io is setup, handle promise rejections
if ( window.Raven ) {
  window.addEventListener( 'unhandledrejection', ( event ) => window.Raven.captureException( event.reason ) );
}

const store = configureStore();

const init = () => {
  ReactDOM.render(
    <Provider store={ store }>
      <ConnectedIntlProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConnectedIntlProvider>
    </Provider>,
    document.getElementById( 'root' ),
  );
};

if ( !global.Intl ) {
  require.ensure( [
    'intl',
  ], ( require ) => {
    require( 'intl' );
    init();
  } );
} else {
  init();
}

registerServiceWorker();
