import React, { useCallback, useContext, useEffect, useState } from "react";

import moment from "moment";
import { Col, Row } from "react-bootstrap";
import { Button } from "../../../../UI/Button/Button";

import classes from "./CalendarSettings.module.css";
import DateContext from "../../../../store/Date/date-context";
import AppointmentsContext from "../../../../store/Appointments/appointments-context";

export const CalendarSettings = (props) => {
  const dateCtx = useContext(DateContext);

  const addOneMonthHandler = () => {
    dateCtx.addOneMonth();
  };
  const subtractOneMonthHandler = () => {
    dateCtx.subtractOneMonth();
  };
  const resetDateHandler = () => {
    dateCtx.resetDate();
  };

  const appointmentListCtx = useContext(AppointmentsContext);
  const addAppointmentHandler = () => {
    appointmentListCtx.showAppointmentFormCall()
  }
  return (
    <Row>
      <Col>
        <Row className={classes.row}>
          <Col className={`${classes.col} ${classes.todayBtn}`} md={2}>
            <Button onClick={resetDateHandler}>Today</Button>
          </Col>
          <Col className={`${classes.col} ${classes.arrowsBtn}`} md={1}>
            <Button onClick={subtractOneMonthHandler}>
              <ion-icon name="chevron-back-outline"></ion-icon>
            </Button>
          </Col>
          <Col className={`${classes.col} ${classes.arrowsBtn}`} md={1}>
            <Button onClick={addOneMonthHandler}>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Button>
          </Col>
          <Col className={`${classes.col} ${classes.date_range}`} md={8}>
            <p>{moment(dateCtx.currentAppDateRange).format("MMM YYYY")}</p>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col></Col>
          <Col md={2}>
            <Button onClick={addAppointmentHandler}>
              <ion-icon name="add-outline"></ion-icon>
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
