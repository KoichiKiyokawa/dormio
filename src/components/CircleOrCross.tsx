import React from 'react'
import { Icon } from 'native-base'

type Props = {
  value: boolean
}

const CircleOrCross: React.FC<Props> = ({ value }) => (
  <Icon
    type="FontAwesome5"
    name={value ? 'circle-thin' : 'close'}
    style={{ fontSize: 24, color: value ? 'red' : 'blue' }}
  />
)

export default CircleOrCross
