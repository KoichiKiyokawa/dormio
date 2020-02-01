import React from 'react'
import AppContainer from './src/containers/AppContainer'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import store from './src/store'
import { reactReduxFirebaseProps } from './src/store/index'
import { RootProvider } from './src/contexts/RootContext'

export default () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
      <RootProvider>
        <AppContainer />
      </RootProvider>
    </ReactReduxFirebaseProvider>
  </Provider>
)
