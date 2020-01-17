import React from 'react'
import { Container, Content, Text } from 'native-base'

import Nav from '../components/Nav'

export default () => {
  return (
    <Container>
      <Nav />

      <Content>
        <Text>meal page</Text>
      </Content>
    </Container>
  )
}
