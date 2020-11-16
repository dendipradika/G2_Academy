import React, { Component } from 'react';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from 'redux';
import AllReducers from "./src/config/redux"
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger'
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/es/integration/react'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth']
}

const persitedReducer = persistReducer(persistConfig, AllReducers)

const store = createStore(
  persitedReducer, applyMiddleware(createLogger())
);

const peristedStore = persistStore(store)

import App from './App';

class IndexApp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={peristedStore} loading={null} ></PersistGate>
        <App />
      </Provider>
    );
  }
}

export default IndexApp;