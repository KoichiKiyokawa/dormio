import React from 'react'
import AppContainer from './src/navigations/AppContainer'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import store from './src/store'
import { reactReduxFirebaseProps } from './src/store/index'
import FirestoreProvider from './src/plugins/FirestoreProvider'

export default () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
      <FirestoreProvider>
        <AppContainer />
      </FirestoreProvider>
    </ReactReduxFirebaseProvider>
  </Provider>
)
