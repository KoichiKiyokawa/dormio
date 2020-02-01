import firebase from "firebase"

  declare type IRawMessage = {
    id: string
    text: string
    createdAt: firebase.firestore.Timestamp
    user: {
      _id: number
      name: string
    }
  }
