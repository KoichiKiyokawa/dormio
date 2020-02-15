import React from 'react'
import { View } from 'react-native'
import { Button, Container, Content, Header, Input, List, ListItem, Text } from 'native-base'
import { useNavigation } from '@react-navigation/core'

interface IUserInput {
  id: string
  password: string
}

const SignIn = () => {
  const navigation = useNavigation()

  // @ts-ignore
  const [userInput, setUserInput] = React.useState<IUserInput>({ id: '', password: '' })

  const onPressSignInButton = () => {}

  return (
    <Container>
      <Header />
      <Content>
        <View style={{ marginTop: 12, flexDirection: 'column', alignItems: 'center' }}>
          <Text>寮で暮らす人のためのアプリ</Text>
          <Text style={{ fontSize: 32 }}>Dormio</Text>
        </View>
        <List>
          <ListItem>
            <Input placeholder="ID" />
          </ListItem>
          <ListItem>
            <Input placeholder="パスワード" />
          </ListItem>
        </List>
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
        </View>
      </Content>
    </Container>
  )
}

export default SignIn
