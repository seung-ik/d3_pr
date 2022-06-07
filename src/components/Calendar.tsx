import React from 'react';
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
`;

const Calendar = () => {
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
        // contentHeight={400}
        // aspectRatio={10}
        // dayHeaderContent={<div style={{ border: '2px solid green' }}>tkqkasdkfjal</div>}
        dayHeaderClassNames="calendar-header"
        stickyHeaderDates={true}
        events={[
          { title: 'event 1', date: '2022-06-04' },
          { title: 'event 2', date: '2022-05-31' },
        ]}
      />
    </Wrapper>
  );
};

export default Calendar;
