import React from 'react'
import { Card, CardItem, Container, Content, Text } from 'native-base'
import { parseToMonthWithDay } from '../utils/dateUtil'
import { useRoute, RouteProp } from '@react-navigation/native'

import Nav from '../components/Nav'
import { StackParams } from '../navigations/StackNavigator'

const NoticeDetail = () => {
  const route = useRoute<RouteProp<StackParams, 'NoticeDetail'>>()
  const {
    notice: { title, body, date }
  } = route.params

  return (
    <Container>
      <Nav title="お知らせ" showBackButton />
      <Content>
        <Card>
          <CardItem header>
            <Text>{title}</Text>
          </CardItem>
          <CardItem>
            <Text>掲載日: {parseToMonthWithDay(date)}</Text>
          </CardItem>
          <CardItem>
            <Text>{body}</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  )
}

export default NoticeDetail
