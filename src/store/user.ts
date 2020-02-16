import { IUser, IUserEditable } from '../../types/IUser'

enum ActionTypes {
  EDIT_PROFILE,
  SIGN_IN
}

type Actions =
  | { type: ActionTypes.EDIT_PROFILE; payload: IUserEditable }
  | { type: ActionTypes.SIGN_IN; payload: Omit<IUser, 'isSignin'> }

// action creaters
export const editProfile = (newState: IUserEditable): Actions => ({
  type: ActionTypes.EDIT_PROFILE,
  payload: newState
})
export const signIn = (user: Omit<IUser, 'isSignin'>): Actions => ({ type: ActionTypes.SIGN_IN, payload: user })

export const initialState: IUser = {
  roomNumber: 0,
  name: '管理人',
  uid: '',
  isManager: true,
  isSignin: false
}

export default function reducer(state: IUser = initialState, action: Actions): IUser {
  switch (action.type) {
    case ActionTypes.EDIT_PROFILE:
      return { ...state, ...action.payload }
    case ActionTypes.SIGN_IN:
      return { ...state, ...action.payload, isSignin: true }
    default:
      return state
  }
}
