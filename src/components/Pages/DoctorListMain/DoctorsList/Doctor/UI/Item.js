import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = (props) => {
  const doctor = props.doctor;
  return (
    <Link to={`/doctors-list/${doctor.id}`}>
      <Row>
      <Col md={1}></Col>
        <Col>
          <p>{doctor.id}</p>
        </Col>
        <Col>
          <p>{doctor.firstName}</p>
        </Col>
        <Col>
          <p>{doctor.lastName}</p>
        </Col>
        <Col>
          <p>{doctor.specialization}</p>
        </Col>
        <Col>
          <p>{doctor.roomNumber}</p>
        </Col>
        <Col md={1}>
          <ion-icon name="create-outline"></ion-icon>
        </Col>
      </Row>
    </Link>
  );
};
