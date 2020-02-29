import firebase from 'firebase'

declare global {
  type RawMessage = {
    id: string
    text: string
    createdAt: firebase.firestore.Timestamp
    isSentToGroupChat: boolean
    user: IUser
  }
}
