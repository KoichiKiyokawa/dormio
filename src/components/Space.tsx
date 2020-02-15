import React from 'react'
import { View } from 'react-native'

const Space: React.FC<{ size: number }> = ({ size }) => <View style={{ height: size }} />

export default Space
