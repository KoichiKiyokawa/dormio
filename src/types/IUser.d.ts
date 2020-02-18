interface IUserEditable {
  roomNumber: number
  name: string
}

interface IUser extends IUserEditable {
  uid: string
  isManager: boolean
  isSignin: boolean
}
