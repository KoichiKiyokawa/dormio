import React from 'react'
import {
  Badge,
  Card,
  CardItem,
  Container,
  Content,
  Icon,
  Text
} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

import Nav from '../components/Nav'
import Centerize from '../components/Centerize'
import { weekEnum } from '../mocks/weeklyMenu'

export default () => {
  const rowStyle = {
    height: 40
  }

  const cellStyle = {
    width: 80,
    height: 40
  }

  return (
    <Container>
      <Content>
        <Card>
          <CardItem header>
            <Text>今週のメニュー</Text>
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
                  </Badge>
                </Centerize>
              </Col>
              <Col>
                <Centerize vertical>
                  <Icon
                    type="FontAwesome5"
                    name="moon"
                    style={{ color: 'gold' }}
                  />
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
                      <Text style={{ color: 'black' }}>
                        {weekDay.breakfast}
                      </Text>
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
      </Content>
    </Container>
  )
}
