import React, { useContext, useEffect } from "react";

// https://www.youtube.com/watch?v=5jRrVqRWqsM

import moment from "moment";
import DateContext from "../../../../store/Date/date-context";
import { Col, Row } from "react-bootstrap";

import classes from "./CalenderDisplay.module.css";
import { CalenderDay } from "./CalenderDay/CalenderDay";
import { CalenderDayTitles } from "./CalenderDayTitles/CalenderDayTitles";
import AppointmentsContext from "../../../../store/Appointments/appointments-context";

export const CalenderDisplay = () => {
  const appointmentListCtx = useContext(AppointmentsContext);
  const appointmentList = appointmentListCtx.appointmentList;
  const dateCtx = useContext(DateContext);
  const value = moment(dateCtx.currentAppDateRange);
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");
  const calendar = [];

  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => {
          let dayRef = day.add(1, "day").clone();
          return {
            day: dayRef,
            appointments: appointmentList.filter(
              (appointment) => appointment.date === dayRef.format("YYYY/MM/DD")
            ),
          };
        })
    );
  }
  return (
    <Row className={classes.calendar_row}>
      <table>
        <thead>
          <CalenderDayTitles />
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => {
                return <CalenderDay key={index} day={day} />;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </Row>
  );
};
