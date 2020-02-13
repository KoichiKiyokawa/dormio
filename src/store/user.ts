import { IUser } from '../../types/IUser'

enum ActionTypes {
  SET_NEW
}

interface Action {
  type: ActionTypes
  payload: Omit<IUser, 'isSignin'>
}

export const setUser = (newState: Omit<IUser, 'isSignin'>): Action => ({ type: ActionTypes.SET_NEW, payload: newState })

export const initialState: IUser = {
  roomNumber: 0,
  name: '管理人',
  id: 0,
  isManager: true,
  isSignin: false
}

export default function reducer(state: IUser = initialState, action: Action): IUser {
  switch (action.type) {
    case ActionTypes.SET_NEW:
      return { ...action.payload, isSignin: state.isSignin }
    default:
      return state
  }
}
