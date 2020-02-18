import firebase from 'firebase'

declare global {
  type RawMessage = {
    id: string
    text: string
    createdAt: firebase.firestore.Timestamp
    user: {
      _id: string
      name: string
    }
  }
}
