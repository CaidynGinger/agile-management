import React from "react";
import { Row, Col } from "react-bootstrap";

import classes from "./CalenderDayTitles.module.css";

export const CalenderDayTitles = () => {
  return (
    <tr className={classes.table_row}>
      <th>
        <h3 className={classes.day_title}>Sunday</h3>
      </th>
      <th>
        <h3 className={classes.day_title}>Monday</h3>
      </th>
      <th>
        <h3 className={classes.day_title}>Tuesday</h3>
      </th>
      <th>
        <h3 className={classes.day_title}>Wednesday</h3>
      </th>
      <th>
        <h3 className={classes.day_title}>Thursday</h3>
      </th>
      <th>
        <h3 className={classes.day_title}>Friday</h3>
      </th>
      <th>
        <h3 className={classes.day_title}>Saturday</h3>
      </th>
    </tr>
  );
};
