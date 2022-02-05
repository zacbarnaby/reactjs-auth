import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
