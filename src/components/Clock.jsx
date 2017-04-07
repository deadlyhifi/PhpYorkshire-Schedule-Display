import * as React from 'react'

export class Clock extends React.Component {
  render () {
    const mins = (this.props.date.getMinutes() < 10 ? '0' : '') + this.props.date.getMinutes()
    return (
      <div className='header'>
        <div className='clock'>
          The time is <span className='clock--display'>{this.props.date.getHours()}:{mins}</span>
        </div>
        <div className='joindin'>joind.in/event/php-yorkshire</div>
      </div>
    )
  }
}

Clock.propTypes = {
  date: React.PropTypes.object.isRequired
}
