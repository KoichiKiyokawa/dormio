import React from 'react'
import {
  Card,
  CardItem,
  Container,
  Content,
  Icon,
  Text,
  Right
} from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'

import { RootContext } from '../contexts/RootContext'
import { parseToMonthWithDay } from '../utils/dateUtil'

export default () => {
  const { notices, setNotices } = React.useContext(RootContext)

  React.useEffect(() => {
    setNotices([
      { text: '自転車が盗まれました', date: new Date() },
      { text: '近隣住民から苦情がきました', date: new Date() }
    ])
  }, [])

  return (
    <Container>
      <Content>
        {/* お知らせ */}
        <Card>
          <CardItem header>
            <FontAwesome5
              name="bullhorn"
              color="teal"
              size={24}
              style={{ marginRight: 10 }}
            />
            <Text>お知らせ</Text>
          </CardItem>
          {notices.map((notice, i) => (
            <CardItem key={i}>
              <Text style={{ marginRight: 10, color: 'silver' }}>
                {parseToMonthWithDay(notice.date)}
              </Text>
              <Text>{notice.text}</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          ))}
        </Card>
      </Content>
    </Container>
  )
}
