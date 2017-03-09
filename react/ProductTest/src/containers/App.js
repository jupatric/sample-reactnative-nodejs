import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from '../configs/Router';
import configureStore from '../stores/ConfigureStore';

class App extends Component {
  render() {
    const store = configureStore()

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
