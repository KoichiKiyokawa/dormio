import firebase from 'firebase'

declare global {
  interface INotice {
    title: string
    body: string
    date: Date
  }

  interface IRawNotice extends Omit<INotice, 'date'> {
    date: firebase.firestore.Timestamp
  }
}
