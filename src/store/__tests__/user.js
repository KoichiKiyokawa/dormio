import reducer, {initialState, setUser}from"../user"

describe('user reducer test', () => {
  test('can set new user', () => {
    // declare function to avoid call by reference
    const newUser = () => ({
      roomNumber: 101,
      name: 'Taro',
      id: 101,
      isManager: false
    })

    expect(reducer(initialState, setUser(newUser()))).toEqual(newUser())
  })
})
