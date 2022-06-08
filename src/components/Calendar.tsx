import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from 'styled-components';

const Wrapper = styled.div`
  // border: 2px solid black;

  & .calendar-header {
    box-sizing: border-box;
    // border: 1px solid purple;
    border-top: 5px solid green;
  }

  & .fc-button {
    background-color: purple;
  }

  & .event-text {
    border: 3px solid black;
    height: 3rem;
    background-color: skyblue;
  }
`;

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: 'event 1', date: '2022-06-04' },
    { title: 'event 2', date: '2022-05-31' },
  ]);

  const injectDayCell = (arg: any) => {
    // console.log(arg);
    return (
      <div style={{ border: '2px solid yellow', width: '100%', height: '100%' }}>
        <div>{arg.dayNumberText}</div>
        <div>asdfas</div>
      </div>
    );
  };

  const injectSlot = (arg: any) => {
    // console.log(arg);
    return (
      <div style={{ border: '2px solid green', width: '100%', height: '100%' }}>
        <div>asdfas</div>
      </div>
    );
  };

  function renderEventContent(eventInfo: any) {
    console.log(eventInfo);
    return (
      <div className="event-text">
        <b style={{ height: '100%' }}>{eventInfo.timeText}asdfasf</b>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  }

  return (
    <Wrapper>
      <FullCalendar
        editable={true}
        customButtons={{
          customToday: { text: `${new Date()}` },
        }}
        eventClick={function (arg) {
          alert('asdfasfd');
        }}
        headerToolbar={{ start: 'customToday', center: '', end: 'prev,next' }}
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={(e) => {
          const data = prompt('뭐추가할래');
          if (data) {
            console.log('adsfa');
            setEvents((prev) => prev.concat({ title: data, date: e.dateStr }));
          }
        }}
        // contentHeight={400}
        // aspectRatio={10}
        // dayHeaderContent={<div style={{ border: '2px solid green' }}>tkqkasdkfjal</div>}
        dayHeaderClassNames="calendar-header"
        dayCellContent={injectDayCell}
        slotLabelContent={injectSlot}
        stickyHeaderDates={true}
        events={events}
        eventContent={renderEventContent}
      />
    </Wrapper>
  );
};

export default Calendar;
