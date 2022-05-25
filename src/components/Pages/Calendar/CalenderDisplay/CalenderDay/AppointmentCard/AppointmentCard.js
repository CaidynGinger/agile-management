import React from "react";

import classes from "./AppointmentCard.module.css";

export const AppointmentCard = (props) => {
  const appointment = props.appointment;
  return (
    <div className={classes.appointment_card}>
      <p>{`${appointment.startTime} - ${appointment.endTime} | ${appointment.patientName} | ${appointment.Doctor}`}</p>
    </div>
  );
};
