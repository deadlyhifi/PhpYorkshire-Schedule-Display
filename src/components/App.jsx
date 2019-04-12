import * as React from 'react'
import { Header } from './Header'
import { Schedule } from './Schedule'

const schedule = require('./../schedule.json')

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { time: new Date() }
  }

  componentDidMount () {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      time: new Date()
    })
  }

  render () {
    return (
      <div>
        <Header time={this.state.time} />
        <Schedule data={schedule} time={this.state.time} />
      </div>
    )
  }
}
