import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './redux/store';

import './scss/styles.scss';

const container = document.getElementById('root')!;
const root = ReactDOMClient.createRoot(container);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
