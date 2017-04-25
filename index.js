import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
import {AppContainer} from 'react-hot-loader';

// import weatherApp from './reducers'; // this is loaded when
// creating a redux store.
// to initialize the application
import PatientApp from './components/PatientApp';

import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
// import './stylus/index.styl';

// const logger = createLogger();

// const store = createStore(weatherApp,
// window.devToolsExtension ? window.devToolsExtension() : f => f,
// process.env.NODE_ENV === 'production'
// ? applyMiddleware(thunk)
// : applyMiddleware(thunk, logger)
// );

const rootElement = document.getElementById('root');

ons.ready(() => render(
  <AppContainer>
    <Provider >
      <PatientApp />
    </Provider>
  </AppContainer>,
  rootElement
));

if (module.hot) {
  module.hot.accept('./components/PatientApp', () => {
    const NextApp = require('./components/PatientApp').default;
    render(
      <AppContainer>
        <Provider >
          <NextApp />
        </Provider>
      </AppContainer>,
      rootElement
    );
  });
}
