export interface IUserEditable {
  roomNumber: number
  name: string
}

export interface IUser extends IUserEditable {
  uid: string
  isManager: boolean
  isSignin: boolean
}
