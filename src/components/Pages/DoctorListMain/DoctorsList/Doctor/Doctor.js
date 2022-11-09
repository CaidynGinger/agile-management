import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import classes from "./Doctor.module.css";
import { Item } from "./UI/Item";

export const Doctor = props => {
  console.log(props);
  const content = props.DoctorList.map((doctor) => {
    return (
      <div key={doctor.id} className={classes.underline}>
        <Item  doctor={doctor} />
      </div>
    );
  });

  return (
    <div className={classes.doctor_item}>
      <Row>
        <Col>
          <div className={`${classes.details} ${classes.titles}`}>
            <Row>
              <Col md={1}></Col>
              <Col>
                <p>ID</p>
              </Col>
              <Col>
                <p>First Name</p>
              </Col>
              <Col>
                <p>Last Name</p>
              </Col>
              <Col>
                <p>Specialization</p>
              </Col>
              <Col>
                <p>Room Number</p>
              </Col>
              <Col md={1}></Col>
            </Row>
          </div>
          <div className={classes.details}>{content}</div>
        </Col>
      </Row>
    </div>
  );
};
