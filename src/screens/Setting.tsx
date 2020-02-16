import React from 'react'
import { View } from 'react-native'
import { Button, Container, Content, Left, List, Input, ListItem, Text, Switch, Right } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/core'

import { editProfile } from '../store/user'
import Nav from '../components/Nav'
import { db } from '../plugins/firebase'

interface IUserInput {
  roomNumber: string
  name: string
}

const Setting = () => {
  const navigation = useNavigation()
  const currentUser = useSelector(state => state.user)

  const dispatch = useDispatch()

  const [currentInput, setCurrentInput] = React.useState<IUserInput>({
    roomNumber: `${currentUser.roomNumber}`,
    name: currentUser.name
  })

  const [isInputValid, setIsInputValid] = React.useState(true)

  /**
   * Inputが変更されたときの処理
   */
  const onChangeInput = (keyWithValue: { [key: string]: string }, isNumber = false) => {
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
    for (const value of Object.values(currentInput)) {
      if (typeof value === 'boolean') {
        continue
      }

      if (value.length === 0) {
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
    db.collection('users')
      .where('uid', '==', currentUser.uid)
      .get()
      .then(querySnapshot => {
        const documentID = querySnapshot.docs[0].id
        db.collection('users')
          .doc(documentID)
          .update({
            roomNumber: parseInt(currentInput.roomNumber),
            name: currentInput.name
          })
          .then(() => navigation.navigate('Home'))
      })
  }

  return (
    <Container>
      <Nav title="設定" showBackButton />
      <Content>
        {currentUser.isSignin ? (
          <>
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
                <Input value={currentInput.name} onChangeText={val => onChangeInput({ name: val })} />
              </ListItem>
            </List>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Button
                onPress={onPressConfirm}
                disabled={!isInputValid}
                style={{ marginTop: 10, width: '66%', justifyContent: 'center' }}
              >
                <Text>確定</Text>
              </Button>
            </View>
          </>
        ) : (
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <View style={{ height: 24 }} />
            <Text>ゲストモードです</Text>
            <View style={{ height: 32 }} />
            <Button style={{ width: '66%', justifyContent: 'center' }}>
              <Text>新規登録</Text>
            </Button>
            <View style={{ height: 32 }} />
            <Text>アカウントをお持ちの方は</Text>
            <Text onPress={() => {}} style={{ color: 'blue' }}>
              ログイン
            </Text>
          </View>
        )}
      </Content>
    </Container>
  )
}

export default Setting
