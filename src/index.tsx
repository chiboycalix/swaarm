/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@kenshooui/react-multi-select/dist/style.css';

/**
 * Initialize ApolloClient
 *
 */
const client = new ApolloClient({
  uri: process.env.REACT_APP_API,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
reportWebVitals();
