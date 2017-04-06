import * as React from 'react'
import { TimeSlot } from './TimeSlot'

export class Schedule extends React.Component {
  upcomingSlots () {
    if (!this.props.time) {
      return this.props.data
    }

    const hours = this.props.time.getHours()
    const mins = this.props.time.getMinutes()
    const currSecs = (hours * 60 * 60) + (mins * 60)
    let currTalk = 0

    // find the current slot
    for (var i = 1; i < this.props.data.length; i++) {
      const split = this.props.data[i].time.split(':')
      const slotSecs = (split[0] * 60 * 60) + (split[1] * 60)

      if (slotSecs > currSecs) {
        currTalk = i > 1 ? i - 1 : 0
        break
      }
      // Last slot of the day
      currTalk = i
    }

    return [this.props.data[currTalk], this.props.data[currTalk + 1]].filter(slot => slot !== undefined)
  }

  render () {
    const timeSlots = []
    this.upcomingSlots().forEach((slot, index) => {
      timeSlots.push(
        <TimeSlot
          key={index}
          time={slot.time}
          track1={slot.track1}
          track2={slot.track2}
        />
      )
    })

    return <table><tbody>{timeSlots}</tbody></table>
  }
}

Schedule.propTypes = {
  data: React.PropTypes.array.isRequired,
  time: React.PropTypes.object
}
