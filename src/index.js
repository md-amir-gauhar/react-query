import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById('root')
);