import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CalendarSettings } from "./CalendarSettings/CalendarSettings";

import classes from "./Calendar.module.css";
import { CalenderDisplay } from "./CalenderDisplay/CalenderDisplay";
import { AddAppointmentForm } from "./AddAppointmentForm/AddAppointmentForm";

export const Calendar = () => {
  return (
    <Row>
      <Col md={10}>
        <br></br>
        <CalendarSettings />
        <CalenderDisplay />
        <AddAppointmentForm />
      </Col>
      <Col md={2}></Col>
    </Row>
  );
};
