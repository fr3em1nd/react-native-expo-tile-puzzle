import React from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
 

const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;
