import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App_container from './App_container';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducer
)

const HocProvider = (props) => (
  <Provider store={store}>
    <App_container />
  </Provider>
)

ReactDOM.render(<HocProvider />, document.getElementById('root'));
registerServiceWorker();
