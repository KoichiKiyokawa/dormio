import React from 'react'
import { Grid, Col, Row } from 'react-native-easy-grid'
import { Badge, Card, CardItem, Container, Content, Icon, Text } from 'native-base'
import { useSelector } from 'react-redux'

import Nav from '../components/Nav'
import Centerize from '../components/Centerize'
import MealOrder from '../components/MealOrder'
import MealOrderList from '../components/MealOrderList'
import { weekEnum } from '../mocks/weeklyMenu'
import { rowStyle, cellStyle } from '../styles'

export default () => {
  const user = useSelector(state => state.user)

  return (
    <Container>
      <Nav title="食事" showSettingButton />
      <Content>
        {/* メニュー */}
        <Card>
          <CardItem header>
            <Text>今週のメニュー</Text>
          </CardItem>
          <Grid>
            <Row style={rowStyle}>
              <Col style={cellStyle} />
              <Col>
                <Centerize vertical>
                  <Icon type="MaterialIcons" name="wb-sunny" style={{ color: 'orange' }} />
                  <Badge style={{ backgroundColor: 'white' }}>
                    <Text style={{ color: 'black' }}>朝食</Text>
                  </Badge>
                </Centerize>
              </Col>
              <Col>
                <Centerize vertical>
                  <Icon type="FontAwesome5" name="moon" style={{ color: 'gold' }} />
                  <Badge style={{ backgroundColor: 'white' }}>
                    <Text style={{ color: 'black' }}>夕食</Text>
                  </Badge>
                </Centerize>
              </Col>
            </Row>
            {weekEnum.map((weekDay, i) => (
              <Row key={i} style={rowStyle}>
                <Col style={cellStyle}>
                  <Centerize horizontal vertical>
                    <Badge {...weekDay.color}>
                      <Text>{weekDay.name}</Text>
                    </Badge>
                  </Centerize>
                </Col>
                <Col>
                  <Centerize vertical>
                    <Badge style={{ backgroundColor: 'white' }}>
                      <Text style={{ color: 'black' }}>{weekDay.breakfast}</Text>
                    </Badge>
                  </Centerize>
                </Col>
                <Col>
                  <Centerize vertical>
                    <Badge style={{ backgroundColor: 'white' }}>
                      <Text style={{ color: 'black' }}>{weekDay.dinner}</Text>
                    </Badge>
                  </Centerize>
                </Col>
              </Row>
            ))}
          </Grid>
        </Card>

        {user.isManager ? (
          // 管理人用住人の食事申し込み一覧
          <MealOrderList />
        ) : (
          // 住人用 食事の申し込み
          <MealOrder />
        )}
      </Content>
    </Container>
  )
}
