import React from 'react'
import { Left, Header, Body, Button, Icon, Right, Text, Title } from 'native-base'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string
  showBackButton?: boolean
  showSettingButton?: boolean
}

const Nav: React.FC<Props> = ({ title, showBackButton = false, showSettingButton = false }) => {
  const navigation = useNavigation()

  return (
    <Header>
      <Left>
        {showBackButton && (
          <Button
            transparent
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Icon name="arrow-back" />
            <Text>戻る</Text>
          </Button>
        )}
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        {showSettingButton && (
          <Button
            transparent
            onPress={() => {
              navigation.navigate('Setting')
            }}
          >
            <Icon name="cog" />
          </Button>
        )}
      </Right>
    </Header>
  )
}

export default Nav
