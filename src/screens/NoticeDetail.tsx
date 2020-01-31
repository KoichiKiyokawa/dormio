import React from 'react'
import { NavigationScreenProp } from 'react-navigation'
import { Card, CardItem, Container, Content, Text } from 'native-base'
import { parseToMonthWithDay } from '../utils/dateUtil'

const NoticeDetail: React.FC<{ navigation: NavigationScreenProp<null> }> = ({ navigation }) => {
  const { title, body, date } = navigation.getParam('notice')

  return (
    <Container>
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
