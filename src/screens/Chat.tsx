import React from 'react'
import {
  Badge,
  Body,
  Container,
  Content,
  Icon,
  Left,
  List,
  ListItem,
  Text,
  Right
} from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'

import Nav from '../components/Nav'

export default ({ navigation }) => {
  const unreadCount = {
    manager: 2,
    residents: 23
  }

  const onPushManager = () => {}

  return (
    <Container>
      <Content>
        <List>
          <ListItem itemHeader>
            <Text>メッセージのやりとりをする</Text>
          </ListItem>
          <ListItem
            button
            icon
            onPress={() => {
              navigation.navigate('ManagerChat')
            }}
          >
            <Left>
              <FontAwesome5 name="user-shield" size={24} />
            </Left>
            <Body>
              <Text>管理人</Text>
            </Body>
            <Right>
              <Badge>
                <Text>{unreadCount.manager}</Text>
              </Badge>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem
            button
            icon
            onPress={() => {
              navigation.navigate('ResidentsChat')
            }}
          >
            <Left>
              <FontAwesome5 name="users" size={24} />
            </Left>
            <Body>
              <Text>住人みんな</Text>
            </Body>
            <Right>
              <Badge>
                <Text>{unreadCount.residents}</Text>
              </Badge>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}
