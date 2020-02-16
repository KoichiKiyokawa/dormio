import React from 'react'
import { View } from 'react-native'
import { Button, Container, Content, Header, Input, List, ListItem, Text } from 'native-base'
import { firebase } from '../plugins/firebase'
import { useNavigation } from '@react-navigation/core'

import Logo from '../components/Logo'
import Space from '../components/Space'

const SignIn = () => {
  const navigation = useNavigation()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const onPressSignInButton = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(error => console.warn(error))
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
        </List>
        <View style={{ marginTop: 12, flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            disabled={email.length + password.length === 0}
            onPress={onPressSignInButton}
            style={{ width: '66%', justifyContent: 'center' }}
          >
            <Text>新規登録</Text>
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
