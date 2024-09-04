import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const events = [
    {
        start : moment('2024-09-02T08:00:00').toDate(),
        end : moment('2024-09-02T10:00:00').toDate(),
        title : "Workshop"
    },
    {
        start : moment('2024-09-02T10:00:00').toDate(),
        end : moment('2024-09-02T12:00:00').toDate(),
        title : "Meeting"
    }
]

export default function MyCalendar() {
  return (
    <div className='dark:bg-navy-800 dark:text-white mt-2'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500}}
        views={['day', 'week', 'month']}
        defaultView='week'
        
      />
    </div>
  )
}
