import React from 'react'
import { View, ViewStyle } from 'react-native'

type Props = {
  horizontal?: boolean
  vertical?: boolean
}

type Styles = {
  flexDirection: string
  alignItems?: string
  justifyContent?: string
}

const Centerize: React.FC<Props> = ({ horizontal = false, vertical = false, children }) => {
  const styles: ViewStyle = { flexDirection: 'row' }
  if (vertical) styles.alignItems = 'center'
  if (horizontal) styles.justifyContent = 'center'

  return <View style={styles}>{children}</View>
}

export default Centerize
