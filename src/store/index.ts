import { combineReducers, createStore } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

import { firebase } from '../plugins/firebase'
import UserReducer from './user'

const store = createStore(
  combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    user: UserReducer
  })
)

export const reactReduxFirebaseProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}

export default store
