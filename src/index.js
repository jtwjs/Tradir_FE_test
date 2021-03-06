import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import Routes from 'Routes';

import rootReducer, { rootSaga } from 'Modules';
import ThemeProvider from 'Utils/ThemeProvider';

const sagaMiddleware = createSagaMiddleware();
const middleware =
  process.env.NODE_ENV === 'development'
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
