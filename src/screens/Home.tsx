import React from 'react'
import { Body, Button, Card, CardItem, Container, Content, Icon, Left, Text, Right } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'

import { db } from '../plugins/firebase'
import { RootContext } from '../contexts/RootContext'
import { parseToMonthWithDay } from '../utils/dateUtil'

export default ({ navigation }) => {
  const { user, inManagerRoom, notices, setNotices } = React.useContext(RootContext)

  React.useEffect(() => {
    setNotices([
      { title: '自転車が盗まれました', body: '鍵の閉め忘れにはくれぐれも気をつけてください。', date: new Date() },
      {
        title: '近隣住民から苦情がきました',
        body: '夜中に寮生が騒いいるせいで眠れないと苦情が来ました。夜中に騒ぐのはやめてください。',
        date: new Date()
      }
    ])
  }, [])

  const onChangeManagerLocation = (inManagerRoom: boolean) => {
    if (!user.isManager) {
      return
    }

    db.collection('managerLocation')
      .doc('trusty')
      .set({ inManagerRoom })
  }

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
                  onPress={() => onChangeManagerLocation(true)}
                >
                  <Text style={{ color: 'white' }}>管理室にいます</Text>
                </Button>
                <Button
                  rounded
                  light={inManagerRoom}
                  danger={!inManagerRoom}
                  style={{ marginLeft: 10 }}
                  onPress={() => onChangeManagerLocation(false)}
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
          {notices &&
            notices.map((notice: INotice, i: number) => (
              <CardItem
                key={i}
                button
                onPress={() => {
                  navigation.navigate('NoticeDetail', { notice })
                }}
              >
                <Left>
                  <Text style={{ marginRight: 10, color: 'silver' }}>{parseToMonthWithDay(notice.date)}</Text>
                  <Text>{notice.title}</Text>
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
