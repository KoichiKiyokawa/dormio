import React from 'react'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Card, CardItem, Switch, Text } from 'native-base'

import { RootContext } from '../contexts/RootContext'
import Centerize from '../components/Centerize'
import CircleOrCross from '../components/CircleOrCross'

export default () => {
  const { mealOrders } = React.useContext(RootContext)

  return (
    <Card>
      <CardItem header>
        <Text>今日の食事申し込み</Text>
      </CardItem>
      <Grid>
        <Row>
          <Col>
            <Text>部屋番号</Text>
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
          <Row key={i}>
            <Col>
              <Text>{roomNumber}</Text>
            </Col>
            <Col>
              <Text>{name}</Text>
            </Col>
            <Col>
              <CircleOrCross value={order.breakfast} />
            </Col>
            <Col>
              <CircleOrCross value={order.dinner} />
            </Col>
          </Row>
        ))}
      </Grid>
    </Card>
  )
}
