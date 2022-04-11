import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/styles.scss';
import { Provider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById('root')!;
const root = ReactDOMClient.createRoot(container);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
