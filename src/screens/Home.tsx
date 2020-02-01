import React from 'react'
import { Body, Button, Card, CardItem, Container, Content, Icon, Left, Text, Right } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import { NavigationScreenProp } from 'react-navigation'

import { parseToMonthWithDay } from '../utils/dateUtil'

const Home: React.FC<{ navigation: NavigationScreenProp<null> }> = ({ navigation }) => {
  const firestore = useFirestore()
  useFirestoreConnect(['managerLocation/trusty', 'notices'])

  const user = useSelector(state => state.user)
  const rawManagerLocation = useSelector(state => state.firestore.data.managerLocation)
  const managerLocation = rawManagerLocation ? rawManagerLocation.trusty : { inManagerRoom: true }

  const rawNotices = useSelector(state => state.firestore.ordered.notices)
  const notices = rawNotices
    ? rawNotices.map(({ date, ...other }) => ({ ...other, date: date.toDate() }))
    : [{ title: '', body: '', date: new Date() }]

  const onChangeManagerLocation = (inManagerRoom: boolean) => {
    if (!user.isManager) {
      return
    }

    firestore
      .collection('managerLocation')
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
                  light={!managerLocation.inManagerRoom}
                  info={managerLocation.inManagerRoom}
                  onPress={() => onChangeManagerLocation(true)}
                >
                  <Text style={{ color: 'white' }}>管理室にいます</Text>
                </Button>
                <Button
                  rounded
                  light={managerLocation.inManagerRoom}
                  danger={!managerLocation.inManagerRoom}
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

export default Home
