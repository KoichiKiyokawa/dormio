import React from 'react'
import { View } from 'react-native'
import {
  Body,
  Button,
  Container,
  Content,
  Left,
  List,
  Input,
  ListItem,
  Text,
  Switch,
  Right
} from 'native-base'
import { RootContext } from '../contexts/RootContext'

interface IUserInput {
  roomNumber: string
  name: string
  id: string
  isManager: boolean
}

export default ({navigation}) => {
  const { user, setUser } = React.useContext(RootContext)
  const [currentInput, setCurrentInput] = React.useState<IUserInput>({
    ...user,
    roomNumber: `${user.roomNumber}`,
    id: `${user.id}`
  })

  const [isInputValid, setIsInputValid] = React.useState(true)

  /**
   * Inputが変更されたときの処理
   */
  const onChangeInput = (
    keyWithValue: { [key: string]: string },
    isNumber = false
  ) => {
    let [key, value] = Object.entries(keyWithValue)[0]

    // ナンバーパッドの場合
    if (isNumber) {
      value = value ? `${parseInt(value)}` : '' // 01 => 1に変換。空文字の場合にNanと出ないようにする
    }

    setCurrentInput({
      ...currentInput,
      [key]: value
    })
  }

  /**
   * 入力が有効かを判定
   */
  const verifyInput = () => {
    for (const property in currentInput) {
      if (currentInput[property].toString().length === 0) {
        setIsInputValid(false)
        return
      }
    }

    setIsInputValid(true)
  }

  React.useEffect(() => {
    verifyInput()
  }, [currentInput])

  const onPressConfirm = () => {
    setUser({
      ...currentInput,
      roomNumber: parseInt(currentInput.roomNumber),
      id: parseInt(currentInput.id)
    })

    navigation.navigate('Home')
  }

  return (
    <Container>
      <Content>
        <List>
          <ListItem>
            <Text style={{ width: 100 }}>部屋番号</Text>
            <Input
              value={`${currentInput.roomNumber}`}
              keyboardType="numeric"
              onChangeText={val => onChangeInput({ roomNumber: val }, true)}
            />
          </ListItem>
          <ListItem>
            <Text style={{ width: 100 }}>名前</Text>
            <Input
              value={currentInput.name}
              onChangeText={val => onChangeInput({ name: val })}
            />
          </ListItem>
          <ListItem>
            <Text style={{ width: 100 }}>ID</Text>
            <Input
              value={`${currentInput.id}`}
              keyboardType="numeric"
              onChangeText={val => onChangeInput({ id: val })}
            />
          </ListItem>
          <ListItem>
            <Left>
              <Text style={{ width: 100 }}>管理者</Text>
            </Left>
            <Body></Body>
            <Right>
              <Switch
                value={currentInput.isManager}
                onValueChange={checked =>
                  setCurrentInput({ ...currentInput, isManager: checked })
                }
              />
            </Right>
          </ListItem>
        </List>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Button
            disabled={!isInputValid}
            onPress={onPressConfirm}
            bordered
            info
            style={{ marginTop: 10, width: '66%', justifyContent: 'center' }}
          >
            <Text>確定</Text>
          </Button>
        </View>
      </Content>
    </Container>
  )
}
