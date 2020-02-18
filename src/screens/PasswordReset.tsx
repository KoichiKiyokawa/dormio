import React from 'react'
import { View } from 'react-native'
import { Button, Container, Content, Input, List, ListItem, Text } from 'native-base'
import { firebase } from '../plugins/firebase'
import { useNavigation } from '@react-navigation/core'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Space from '../components/Space'

const SignIn = () => {
  const navigation = useNavigation()
  const [email, setEmail] = React.useState('')
  const password = 'mock'

  const onPressSignInButton = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.warn(error))
  }

  return (
    <Container>
      <Nav title="" showBackButton />
      <Content>
        <Space size={12} />
        <Logo />
        <Space size={32} />

        <Text style={{ textAlign: 'center' }}>パスワードの再設定用のメールをお送りします。</Text>
        <Text style={{ textAlign: 'center' }}>登録したメールアドレスを入力してください。</Text>
        <List>
          <ListItem>
            <Input
              placeholder="メールアドレス"
              autoCompleteType="email"
              onChangeText={inputEmail => setEmail(inputEmail)}
            />
          </ListItem>
        </List>
        <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            disabled={email.length === 0}
            onPress={onPressSignInButton}
            style={{ width: '66%', justifyContent: 'center' }}
          >
            <Text>リセットメールを送る</Text>
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
