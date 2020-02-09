import firebase from 'firebase'

export type RawMessage = {
  id: string
  text: string
  createdAt: firebase.firestore.Timestamp
  user: {
    _id: number
    name: string
  }
}