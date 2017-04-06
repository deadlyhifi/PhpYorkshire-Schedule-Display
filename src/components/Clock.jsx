import * as React from 'react'

export class Clock extends React.Component {
  render () {
    return (
      <span>The time is {this.props.date.toLocaleTimeString('en-GB')}</span>
    )
  }
}

Clock.propTypes = {
  date: React.PropTypes.object.isRequired
}
