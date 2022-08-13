import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider} from 'react-redux';
import { createStore } from 'redux';
import { cakeReducer } from './redux/cake/cakeReducer';
import App from './App';
import './index.css';

const store = createStore(cakeReducer)
console.log(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
       <App />

    </Provider>
   
 
);


