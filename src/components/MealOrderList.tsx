import React from 'react'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Card, CardItem, Text } from 'native-base'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

import Centerize from '../components/Centerize'
import CircleOrCross from '../components/CircleOrCross'
import { getWeekName } from '../utils/dateUtil'

export default () => {
  useFirestoreConnect('mealOrders')
  const _mealOrders = useSelector(state => state.firestore.data.mealOrders)
  const mealOrders = _mealOrders ? _mealOrders.trusty.weeklyOrder : []
  const todayWeekName = getWeekName(new Date())

  return (
    <Card>
      <CardItem header>
        <Text>今日の食事申し込み</Text>
      </CardItem>
      <Grid>
        <Row style={{ borderBottomWidth: 1 }}>
          <Col>
            <Centerize vertical horizontal>
              <Text>部屋番号</Text>
            </Centerize>
          </Col>
          <Col>
            <Text>名前</Text>
          </Col>
          <Col>
            <Text>朝食</Text>
          </Col>
          <Col>
            <Text>夕食</Text>
          </Col>
        </Row>
        {mealOrders.map(({ roomNumber, name, order }, i) => (
          <Row key={i} style={{ borderBottomWidth: 1 }}>
            <Col>
              <Centerize vertical horizontal>
                <Text>{roomNumber}</Text>
              </Centerize>
            </Col>
            <Col>
              <Centerize vertical>
                <Text style={{ paddingTop: 3 }}>{name}</Text>
              </Centerize>
            </Col>
            <Col>
              <CircleOrCross value={order[todayWeekName].breakfast} />
            </Col>
            <Col>
              <CircleOrCross value={order[todayWeekName].dinner} />
            </Col>
          </Row>
        ))}
      </Grid>
    </Card>
  )
}
