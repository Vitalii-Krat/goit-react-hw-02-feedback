import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './globalStyled';
import App from './componets/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
