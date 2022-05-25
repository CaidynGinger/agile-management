import React from "react";
import { AppointmentCard } from "./AppointmentCard/AppointmentCard";

import classes from "./CalenderDay.module.css";

export const CalenderDay = (props) => {
  const day = props.day.day.format("D").toString();
  return (
    <td className={classes.single_day}>
      <div className={classes.cell_content}>
        {day}
        {props.day.appointments.map((appointment) => {
          return (
            <React.Fragment key={appointment.id}>
              <AppointmentCard appointment={appointment} />
              <div className={classes.brake}></div>
            </React.Fragment>
          );
        })}
      </div>
    </td>
  );
};
