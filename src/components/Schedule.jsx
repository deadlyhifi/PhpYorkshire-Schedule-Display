import * as React from 'react'
import PropTypes from 'prop-types'
import { TimeSlot } from './TimeSlot'

export class Schedule extends React.Component {
  upcomingSlots () {
    const hours = this.props.time.getHours()
    const mins = this.props.time.getMinutes()
    const currSecs = hours * 60 * 60 + mins * 60

    return this.props.data.map((item, index) => {
      const curSplit = item.time.split(':')
      const curSlotStart = curSplit[0] * 60 * 60 + curSplit[1] * 60

      let nextSlotStart = 86400 // end of day
      if (!(this.props.data.length - 1 === index)) {
        const nextSplit = this.props.data[index + 1].time.split(':')
        nextSlotStart = nextSplit[0] * 60 * 60 + nextSplit[1] * 60
      }

      if (currSecs >= curSlotStart && currSecs < nextSlotStart) {
        return {
          ...item,
          style: 'active'
        }
      }

      if (currSecs < nextSlotStart) {
        return {
          ...item,
          style: 'future'
        }
      }

      return {
        ...item,
        style: 'inactive'
      }
    })
  }

  render () {
    const timeSlots = []
    this.upcomingSlots().forEach((slot, index) => {
      timeSlots.push(
        <TimeSlot key={index} style={slot.style} time={slot.time} track1={slot.track1} track2={slot.track2} />
      )
    })

    return (
      <div>
        <div className='schedule'>{timeSlots}</div>
      </div>
    )
  }
}

Schedule.propTypes = {
  data: PropTypes.array.isRequired,
  time: PropTypes.object.isRequired
}
