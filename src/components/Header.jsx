import * as React from 'react'

export class Header extends React.Component {
  render () {
    const mins = this.props.time.getMinutes()
    return (
      <div className='schedule--row schedule--row__titles'>
        <div className='track track1'>Track 1</div>
        <div className='time'>
          {this.props.time.getHours()}:{mins < 10 ? '0' : ''}{mins}
        </div>
        <div className='track track2'>Track 2</div>
      </div>
    )
  }
}

Header.propTypes = {
  time: React.PropTypes.object.isRequired
}
