import * as React from 'react'
import { Clock } from './Clock'
import { Schedule } from './Schedule'

const schedule = require('./../schedule.json')

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div>
        <Clock date={this.state.date} />
        <Schedule data={schedule} time={this.state.date} />
      </div>
    )
  }
}
