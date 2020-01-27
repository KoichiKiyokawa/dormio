import React from 'react'
import { Body, Button, Card, CardItem, Container, Content, Icon, Left, Text, Right } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'

import { RootContext } from '../contexts/RootContext'
import { parseToMonthWithDay } from '../utils/dateUtil'

export default () => {
  const [inManagerRoom, setIsManagerRoom] = React.useState(true)
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
        {/* 管理人の情報 */}
        <Card>
          <CardItem header>
            <FontAwesome5 name="user-shield" size={24} style={{ marginRight: 10 }} />
            <Text>管理人さん情報</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>管理人は現在...</Text>
              <Body style={{ justifyContent: 'center', flexDirection: 'row' }}>
                <Button
                  rounded
                  light={!inManagerRoom}
                  info={inManagerRoom}
                  onPress={() => setIsManagerRoom(!inManagerRoom)}
                >
                  <Text style={{ color: 'white' }}>管理室にいます</Text>
                </Button>
                <Button
                  rounded
                  light={inManagerRoom}
                  danger={!inManagerRoom}
                  style={{ marginLeft: 10 }}
                  onPress={() => setIsManagerRoom(!inManagerRoom)}
                >
                  <Text style={{ color: 'white' }}>出かけています</Text>
                </Button>
              </Body>
            </Body>
          </CardItem>
        </Card>

        {/* お知らせ */}
        <Card>
          <CardItem header>
            <FontAwesome5 name="bullhorn" color="teal" size={24} style={{ marginRight: 10 }} />
            <Text>お知らせ</Text>
          </CardItem>
          {notices.map((notice, i) => (
            <CardItem key={i}>
              <Left>
                <Text style={{ marginRight: 10, color: 'silver' }}>{parseToMonthWithDay(notice.date)}</Text>
                <Text>{notice.text}</Text>
              </Left>
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
