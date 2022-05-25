import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import classes from "./Doctor.module.css";
import { Item } from "./UI/Item";

const doctorsList = [
  {
    id: "2110020",
    name: "Kiara Bahadur",
    specialization: "Podiatrists",
    roomNumber: "4",
  },
  {
    id: "2003454",
    name: "Wilma Ray",
    specialization: "Physiologist",
    roomNumber: "1",
  },
  {
    id: "21284012",
    name: "Allen Laing",
    specialization: "General Practitioners",
    roomNumber: "2",
  },
];

export const Doctor = () => {
  const content = doctorsList.map((doctor) => {
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
                <p>Doctor Name</p>
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
