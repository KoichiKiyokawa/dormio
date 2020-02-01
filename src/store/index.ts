import { combineReducers, createStore } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

import { firebase } from '../plugins/firebase'
import UserReducer from './user'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  user: UserReducer
})

const store = createStore( rootReducer)
export default store

export type RootState = ReturnType<typeof rootReducer>

export const reactReduxFirebaseProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

