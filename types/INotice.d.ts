import firebase from 'firebase'

export interface INotice {
  title: string
  body: string
  date: Date
}

export interface IRawNotice extends Omit<INotice, 'date'> {
  date: firebase.firestore.Timestamp
}
