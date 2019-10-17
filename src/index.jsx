import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { sagaMiddleware } from './client/utils/store';
import saga from './client/sagas/saga';


import Routes from './client/utils/routes';



sagaMiddleware.run(saga);
ReactDOM.render(
  <Provider store={store}>

      <Routes />

  </Provider>,
  document.getElementById('root'),
);


