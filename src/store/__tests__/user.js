import reducer, { initialState, setUser } from '../user'

describe('user reducer test', () => {
  test('can set new user', () => {
    // declare function to avoid call by reference
    const newUser = () => ({
      roomNumber: 101,
      name: 'Taro',
      uid: 'uid_test',
      isManager: false,
      isSignin: false
    })

    expect(reducer(initialState, setUser(newUser()))).toEqual(newUser())
  })
})
