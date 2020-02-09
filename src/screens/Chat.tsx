import React from 'react'
import _ from 'lodash'
import { Badge, Body, Container, Content, Icon, Left, List, ListItem, Text, Right } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import { NavigationScreenProp } from 'react-navigation'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

import { RootState } from '../store'
import { RawMessage } from '../../types/RawMessage'

const Chat: React.FC<{ navigation: NavigationScreenProp<null> }> = ({ navigation }) => {
  useFirestoreConnect(() => [{ collection: 'messages' }])

  const unreadCount = {
    manager: 0,
    residents: 0
  }

  const messages: RawMessage[] = useSelector((state: RootState) => state.firestore.ordered.messages) || []
  const user = useSelector((state: RootState) => state.user)

  return (
    <Container>
      <Content>
        <List>
          <ListItem itemHeader>
            <Text>メッセージのやりとりをする</Text>
          </ListItem>
          {user.isManager ? (
            _.uniqBy(
              messages.filter(({ user }) => user._id !== 0),
              'user._id'
            ).map(({ user }, i) => (
              <ListItem
                key={i}
                button
                icon
                onPress={() => {
                  navigation.navigate('ManagerChat', { userName: user.name })
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
