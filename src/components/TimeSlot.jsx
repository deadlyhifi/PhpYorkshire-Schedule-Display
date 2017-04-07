import * as React from 'react'

export class TimeSlot extends React.Component {
  render () {
    return (
      <div className='schedule--row'>
        <div className='track track1'>{this.props.track1}</div>
        <div className='time'>{this.props.time}</div>
        <div className='track track2'>{this.props.track2}</div>
      </div>
    )
  }
}

TimeSlot.propTypes = {
  time: React.PropTypes.string.isRequired,
  track1: React.PropTypes.string.isRequired,
  track2: React.PropTypes.string.isRequired
}
