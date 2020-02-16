import React from 'react'
import { View } from 'react-native'
import { Button, Container, Content, Header, Input, List, ListItem, Spinner, Text } from 'native-base'
import { firebase } from '../plugins/firebase'
import { useNavigation } from '@react-navigation/core'
import { useDispatch } from 'react-redux'

import Logo from '../components/Logo'
import Space from '../components/Space'
import { signIn } from '../store/user'
import { db } from '../plugins/firebase'

const SignIn = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [roomNumber, setRoomNumber] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)

  const onPressSignInButton = () => {
    setIsLoading(true)
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const uid = (response.user || {}).uid || ''
        db.collection('users')
          .add({
            isManager: false,
            name,
            roomNumber,
            uid
          })
          .then(response => {
            console.log(response)
            dispatch(signIn({ isManager: false, name, roomNumber, uid }))
            navigation.navigate('Main')
          })
      })
      .catch(error => console.warn(error))
      .finally(() => setIsLoading(false))
  }

  return (
    <Container>
      <Header />
      <Content>
        <Space size={12} />
        <Logo />
        <List>
          <ListItem>
            <Input
              placeholder="メールアドレス"
              autoCompleteType="email"
              onChangeText={inputEmail => setEmail(inputEmail)}
            />
          </ListItem>
          <ListItem>
            <Input
              placeholder="パスワード"
              autoCompleteType="password"
              secureTextEntry
              onChangeText={inputPassword => setPassword(inputPassword)}
            />
          </ListItem>
          <ListItem>
            <Input placeholder="名前" onChangeText={inputName => setName(inputName)} />
          </ListItem>
          <ListItem>
            <Input
              placeholder="部屋番号"
              keyboardType="number-pad"
              onChangeText={inputRoomNumber => setRoomNumber(parseInt(inputRoomNumber))}
            />
          </ListItem>
        </List>
        <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            disabled={email.length + password.length === 0}
            onPress={onPressSignInButton}
            style={{ width: '66%', justifyContent: 'center' }}
          >
            {isLoading ? <Spinner /> : <Text>新規登録</Text>}
          </Button>
        </View>
        <View style={{ marginTop: 12, flexDirection: 'column', alignItems: 'center' }}>
          <Text>アカウントをお持ちの方は</Text>
          <Text
            onPress={() => {
              navigation.navigate('SignIn')
            }}
            style={{ color: 'blue' }}
          >
            ログイン
          </Text>
        </View>
      </Content>
    </Container>
  )
}

export default SignIn
