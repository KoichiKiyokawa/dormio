import React from 'react'
import _ from 'lodash'
import { Badge, Body, Container, Content, Icon, Left, List, ListItem, Text, Right } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'

import Nav from '../components/Nav'

const Chat = () => {
  const navigation = useNavigation()

  const unreadCount = {
    manager: 0,
    residents: 0
  }

  const users: IUser[] = useSelector(state => state.firestore.ordered.users) || []
  const manager = users.find(({ isManager }) => isManager)

  const messages: RawMessage[] = useSelector(state => state.firestore.ordered.messages) || []
  const currentUser = useSelector(state => state.user)

  return (
    <Container>
      <Nav title="チャット" showSettingButton />
      <Content>
        <List>
          <ListItem itemHeader>
            <Text>メッセージのやりとりをする</Text>
          </ListItem>
          {currentUser.isManager ? (
            _.uniqBy(
              messages.filter(({ user }) => user.uid !== currentUser.uid),
              'user.uid'
            ).map(({ user }, i) => (
              <ListItem
                key={i}
                button
                icon
                onPress={() => {
                  navigation.navigate('ManagerChat', { partnerUser: user })
                }}
              >
                <Left>
                  <FontAwesome5 name="user" size={24} />
                </Left>
                <Body>
                  <Text>{user.name}</Text>
                </Body>
                <Right>
                  {unreadCount.manager > 0 && (
                    <Badge>
                      <Text>{unreadCount.manager}</Text>
                    </Badge>
                  )}
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            ))
          ) : (
            <ListItem
              button
              icon
              onPress={() => {
                navigation.navigate('ManagerChat', { partnerUser: manager })
              }}
            >
              <Left>
                <FontAwesome5 name="user-shield" size={24} />
              </Left>
              <Body>
                <Text>管理人</Text>
              </Body>
              <Right>
                {unreadCount.manager > 0 && (
                  <Badge>
                    <Text>{unreadCount.manager}</Text>
                  </Badge>
                )}
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          )}
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
              {unreadCount.residents > 0 && (
                <Badge>
                  <Text>{unreadCount.residents}</Text>
                </Badge>
              )}
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

export default Chat
