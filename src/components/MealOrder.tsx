import React from 'react'
import { Badge, Card, CardItem, Text, Icon, Switch } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

import { RootContext } from '../contexts/RootContext'
import Centerize from '../components/Centerize'
import { weekEnum } from '../mocks/weeklyMenu'
import { weekNames } from '../utils/dateUtil'
import { rowStyle, cellStyle } from '../styles'

export default () => {
  const { user, mealOrders, setMealOrders } = React.useContext(RootContext)

  const currentUserOrder = mealOrders.find(
    eachOrder => eachOrder.roomNumber === user.roomNumber
  ).order
  console.log(mealOrders)
  console.log(currentUserOrder)

  const onOrderSwitched = (
    weekIndex: number,
    mealType: 'breakfast' | 'dinner'
  ) => {
    const _order = mealOrders
    const weekName = weekNames[weekIndex]
    _order[weekName][mealType] = !mealOrders[weekName][mealType]
    setMealOrders(_order)
  }

  return (
    <Card>
      <CardItem header>
        <Text>食事の申込み</Text>
      </CardItem>
      <Grid>
        <Row style={rowStyle}>
          <Col style={cellStyle} />
          <Col>
            <Centerize vertical>
              <Icon
                type="MaterialIcons"
                name="wb-sunny"
                style={{ color: 'orange' }}
              />
              <Badge style={{ backgroundColor: 'white' }}>
                <Text style={{ color: 'black' }}>朝食</Text>
              </Badge> </Centerize>
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
        {weekEnum.map(({ name, color }, i) => (
          <Row key={i}>
            <Col style={cellStyle}>
              <Centerize horizontal vertical>
                <Badge {...color}>
                  <Text>{name}</Text>
                </Badge>
              </Centerize>
            </Col>
            <Col>
              <Centerize vertical>
                <Badge style={{ paddingLeft: 25, backgroundColor: 'white' }}>
                  <Switch
                    value={currentUserOrder[weekNames[i]].breakfast}
                    onValueChange={() => onOrderSwitched(i, 'breakfast')}
                  />
                </Badge>
              </Centerize>
            </Col>
            <Col>
              <Centerize vertical>
                <Badge style={{ paddingLeft: 25, backgroundColor: 'white' }}>
                  <Switch value={currentUserOrder[weekNames[i]].dinner} />
                </Badge>
              </Centerize>
            </Col>
          </Row>
        ))}
      </Grid>
    </Card>
  )
}
