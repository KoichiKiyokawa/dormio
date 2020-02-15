import React from 'react'
import { View } from 'react-native'
import { Button, Container, Content, Header, Input, List, ListItem, Text } from 'native-base'
import { useNavigation } from '@react-navigation/core'

import { firebase } from '../plugins/firebase'
import Logo from '../components/Logo'
import Space from '../components/Space'

const SignIn = () => {
  const navigation = useNavigation()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState<string>('')

  const onPressSignInButton = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response)
        navigation.navigate('Main')
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            setError('メールアドレスが無効です')
            break
          case 'auth/wrong-password':
            setError('パスワードが間違っています')
            break
          case 'auth/user-not-found':
            setError('ユーザー情報が見つかりません')
            break
        }

        console.warn(`error code: ${error.code} message: ${error.message}`)
      })
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
              secureTextEntry
              onChangeText={inputPassword => setPassword(inputPassword)}
            />
          </ListItem>
        </List>
        <Text style={{ textAlign: 'center', color: 'red' }}>{error}</Text>
        <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'center' }}>
          <Button onPress={onPressSignInButton} style={{ width: '66%', justifyContent: 'center' }}>
            <Text>ログイン</Text>
          </Button>
        </View>
        <View style={{ marginTop: 12, flexDirection: 'column', alignItems: 'center' }}>
          <Text>アカウントをお持ちでない方は</Text>
          <Text
            onPress={() => {
              navigation.navigate('SignUp')
            }}
            style={{ color: 'blue' }}
          >
            新規登録
          </Text>
          <Text style={{ marginTop: 12 }}>パスワードをお忘れの方は</Text>
          <Text
            onPress={() => {
              navigation.navigate('PasswordReset')
            }}
            style={{ color: 'blue' }}
          >
            パスワードをリセット
          </Text>
        </View>
      </Content>
    </Container>
  )
}

export default SignIn
