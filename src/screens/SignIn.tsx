import React from 'react'
import { View } from 'react-native'
import { Button, Container, Content, Header, Input, List, ListItem, Spinner, Text } from 'native-base'
import { useNavigation } from '@react-navigation/core'
import { useDispatch } from 'react-redux'

import { firebase } from '../plugins/firebase'
import Logo from '../components/Logo'
import Space from '../components/Space'
import { signIn } from '../store/user'
import { db } from '../plugins/firebase'
import { IUser } from '../../types/IUser'

const SignIn = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const onPressSignInButton = () => {
    setIsLoading(true)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response)
        const uid = (response.user || {}).uid || ''
        // TODO: redux-saga
        db.collection('users')
          .where('uid', '==', uid)
          .get()
          .then(querySnapshot => {
            const currentUser = querySnapshot.docs[0].data()
            dispatch(signIn(currentUser as Omit<IUser, 'isSignin'>))
            navigation.navigate('Main')
          })
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
              secureTextEntry
              onChangeText={inputPassword => setPassword(inputPassword)}
            />
          </ListItem>
        </List>
        <Text style={{ textAlign: 'center', color: 'red' }}>{error}</Text>
        <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            onPress={onPressSignInButton}
            disabled={email.length * password.length === 0 || isLoading}
            style={{ width: '66%', justifyContent: 'center' }}
          >
            {isLoading ? <Spinner /> : <Text>ログイン</Text>}
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
