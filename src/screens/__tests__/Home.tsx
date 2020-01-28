import React from 'react'
import Home from '../Home'

import renderer from 'react-test-renderer'

describe('easy test', () => {
  test('plus', () => {
    expect(1 + 1).toBe(2)
  })
})

describe('rendering test', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
