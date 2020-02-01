enum ActionTypes {
  SET_NEW
}

interface Action {
  type: ActionTypes
  payload: IUser
}

export const setNew = (newState: IUser): Action => ({ type: ActionTypes.SET_NEW, payload: newState })

const initialState: IUser = {
  roomNumber: 0,
  name: '管理人',
  id: 0,
  isManager: true
}

export default function reducer(state: IUser = initialState, action: Action): IUser {
  switch (action.type) {
    case ActionTypes.SET_NEW:
      return action.payload
    default:
      return state
  }
}
