import React from 'react'
import AppContainer from './src/navigations/AppContainer'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import store from './src/store'
import { reactReduxFirebaseProps } from './src/store/index'
import FirestoreProvider from './src/plugins/FirestoreProvider'

export default () => {
  const [isReady, setIsReady] = React.useState(false)
  React.useEffect(() => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    }).then(() => {
      setIsReady(true)
    })
  }, [])

  return !isReady ? (
    <AppLoading />
  ) : (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
        <FirestoreProvider>
          <AppContainer />
        </FirestoreProvider>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}
