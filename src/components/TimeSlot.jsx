import * as React from 'react'

export class TimeSlot extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.track1}</td>
        <td>{this.props.time}</td>
        <td>{this.props.track2}</td>
      </tr>
    )
  }
}

TimeSlot.propTypes = {
  time: React.PropTypes.string.isRequired,
  track1: React.PropTypes.string.isRequired,
  track2: React.PropTypes.string.isRequired
}
