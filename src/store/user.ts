import { IUser } from '../../types/IUser'

enum ActionTypes {
  SET_NEW,
  SIGN_IN
}

type Actions = { type: ActionTypes.SET_NEW; payload: Omit<IUser, 'isSignin'> } | { type: ActionTypes.SIGN_IN }

// action creaters
export const setUser = (newState: Omit<IUser, 'isSignin'>): Actions => ({
  type: ActionTypes.SET_NEW,
  payload: newState
})
export const signIn = (): Actions => ({ type: ActionTypes.SIGN_IN })

export const initialState: IUser = {
  roomNumber: 0,
  name: '管理人',
  id: 0,
  isManager: true,
  isSignin: false
}

export default function reducer(state: IUser = initialState, action: Actions): IUser {
  switch (action.type) {
    case ActionTypes.SET_NEW:
      return { ...action.payload, isSignin: state.isSignin }
    case ActionTypes.SIGN_IN:
      return { ...state, isSignin: true }
    default:
      return state
  }
}
