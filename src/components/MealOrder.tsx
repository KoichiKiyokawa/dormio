import React from 'react'
import { Badge, Card, CardItem, Text, Icon, Switch } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase'

import Centerize from '../components/Centerize'
import { weekEnum } from '../mocks/weeklyMenu'
import { weekNames } from '../utils/dateUtil'
import { rowStyle, cellStyle } from '../styles'
import { useSelector } from 'react-redux'

export default () => {
  const firebase = useFirestore()
  useFirestoreConnect('mealOrders')
  const user = useSelector(state => state.user)
  const _mealOrders = useSelector(state => state.firestore.data.mealOrders)
  const mealOrders = _mealOrders ? _mealOrders.trusty.weeklyOrder : []
  const currentUserOrder: IMealOrder =
    mealOrders.find(eachOrder => eachOrder.roomNumber === user.roomNumber)

  const onOrderSwitched = (weekIndex: number, mealType: 'breakfast' | 'dinner') => {
    const weekName = weekNames[weekIndex]
    currentUserOrder.order[weekName][mealType] = !currentUserOrder.order[weekName][mealType]
    const newOrder = mealOrders.map(eachOrder => {
      if (eachOrder.roomNumber === currentUserOrder.roomNumber) {
        return currentUserOrder
      }

      return eachOrder
    })

    firebase.collection('mealOrders').doc('trusty').set({ weeklyOrder: newOrder })
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
                    value={currentUserOrder.order[weekNames[i]].breakfast}
                    onValueChange={() => onOrderSwitched(i, 'breakfast')}
                  />
                </Badge>
              </Centerize>
            </Col>
            <Col>
              <Centerize vertical>
                <Badge style={{ paddingLeft: 25, backgroundColor: 'white' }}>
                  <Switch
                    value={currentUserOrder.order[weekNames[i]].dinner}
                    onValueChange={() => onOrderSwitched(i, 'dinner')}
                  />
                </Badge>
              </Centerize>
            </Col>
          </Row>
        ))}
      </Grid>
    </Card>
  )
}
