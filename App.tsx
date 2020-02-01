import React from 'react'
import AppContainer from './src/containers/AppContainer'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import store from './src/store'
import { reactReduxFirebaseProps } from './src/store/index'

export default () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
      <AppContainer />
    </ReactReduxFirebaseProvider>
  </Provider>
)
