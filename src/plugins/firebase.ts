import firebase from 'firebase'
import { env } from '../../env'

if (!firebase.apps.length) {
  firebase.initializeApp({ ...env })
  firebase.analytics()
}

export const db = firebase.firestore()
