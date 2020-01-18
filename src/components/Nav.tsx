import React from 'react'
import {
  Left,
  Header,
  Body,
  Button,
  Icon,
  Right,
  Text,
  Title
} from 'native-base'

const Nav = ({
  title,
  showBackButton = false,
  showSettingButton = false,
  navigation
}) => (
  <Header>
    <Left>
      {showBackButton && (
        <Button
          transparent
          onPress={() => {
            navigation.goBack(null)
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

export default Nav
