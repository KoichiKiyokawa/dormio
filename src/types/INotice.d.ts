import firebase from 'firebase'

declare interface INotice {
  title: string
  body: string
  date: Date | firebase.firestore.Timestamp
}
