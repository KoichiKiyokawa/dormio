import firebase from 'firebase'

export interface INotice {
  title: string
  body: string
  date: Date | firebase.firestore.Timestamp
}
