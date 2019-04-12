import * as React from 'react'
import PropTypes from 'prop-types'

export class Header extends React.Component {
  render () {
    let mins = this.props.time.getMinutes()
    mins = mins < 10 ? '0' + mins : mins

    return (
      <div className='schedule--row schedule--row__titles'>
        <div className='track track1'>Track 1</div>
        <div className='time'>
          {this.props.time.getHours()}
          <span className='time__divider'>:</span>
          {mins}
        </div>
        <div className='track track2'>Track 2</div>
      </div>
    )
  }
}

Header.propTypes = {
  time: PropTypes.object.isRequired
}
