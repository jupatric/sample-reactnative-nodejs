import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './src/stores/ConfigureStore'
import App from './src/containers/App'

const store = configureStore()

const producttest = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('ProductTest', () => producttest)