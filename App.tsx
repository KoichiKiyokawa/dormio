import React from 'react'
import AppContainer from './src/containers/AppContainer'
import { RootProvider } from './src/contexts/RootContext'

export default () => (
  <RootProvider>
    <AppContainer />
  </RootProvider>
)
