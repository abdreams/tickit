import React, { useState } from "react";

const Calendar = () => {
  const [eventDates] = useState({
    "2024-09-10": "red",
    "2024-09-15": "blue",
  });

  const generateCalendar = () => {
    const daysInMonth = 30; // Adjust for the actual number of days in the month
    const firstDay = new Date("2024-09-01").getDay(); // Get the weekday for the 1st (0 for Sunday, 1 for Monday, etc.)

    let days = [];
    let week = [];

    // Fill the first week with empty cells until the first day
    for (let i = 0; i < firstDay; i++) {
      week.push(<td key={`empty-${i}`} style={{ padding: "10px" }}></td>);
    }

    // Fill in the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      let date = `2024-09-${day.toString().padStart(2, "0")}`;
      week.push(
        <td
          key={day}
          style={{
            backgroundColor: eventDates[date] || "transparent",
            padding: "10px",
          }}
        >
          {day}
        </td>
      );

      // Once we have 7 days (a full week), push the week to the calendar
      if (week.length === 7) {
        days.push(<tr key={`week-${day}`}>{week}</tr>);
        week = [];
      }
    }

    // Push the last remaining days in the week, if any
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(<td key={`empty-${week.length}`} style={{ padding: "10px" }}></td>);
      }
      days.push(<tr key="last-week">{week}</tr>);
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{generateCalendar()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
