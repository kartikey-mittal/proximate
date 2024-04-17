import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const VerticalTimelineCalendar = () => {
  const events = [
    {
      title: 'Kartikey',
      start: new Date(2024, 3, 16, 8, 0),
      end: new Date(2024, 3, 16, 10, 0),
      resourceId: 1,
    },
    {
      title: 'Praveen',
      start: new Date(2024, 3, 16, 12, 0),
      end: new Date(2024, 3, 16, 15, 0),
      resourceId: 2,
    },
    {
      title: 'Kartikey',
      start: new Date(2024, 3, 16, 16, 0),
      end: new Date(2024, 3, 16, 18, 0),
      resourceId: 3,
    },
    {
      title: 'Kaif',
      start: new Date(2024, 3, 16, 19, 0),
      end: new Date(2024, 3, 16, 21, 0),
      resourceId: 2,
    },
  ];

  const getEventColor = (event) => {
    switch (event.resourceId) {
      case 1:
        return 'red';
      case 2:
        return 'orange';
      case 3:
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <div style={{ height: 600 }}>
      <div style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', padding: '10px 0' }}>
        {moment(new Date(2024, 3, 16)).format('dddd')}
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        views={['week', 'day']}
        step={60}
        timeslots={1}
        defaultDate={new Date(2024, 3, 16)}
        components={{
          timeGutterHeader: () => <div style={{ display: 'none' }}>HELLO</div>,
          event: ({ event }) => (
            <div
              style={{
                backgroundColor: getEventColor(event),
                borderRadius: 5,
                marginBottom: 5,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 'bold', padding: 5 }}>
                {event.title} - {moment(event.end).diff(event.start, 'hours')} hours
              </div>
              {/* <div style={{ padding: 5 }}>
                {moment(event.start).format('h:mm A')} - {moment(event.end).format('h:mm A')}
              </div> */}
            </div>
          ),
        }}
      />
    </div>
  );
};

export default VerticalTimelineCalendar;