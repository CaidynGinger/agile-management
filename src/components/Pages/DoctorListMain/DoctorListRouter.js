import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const DoctorListRouter = () => {
  return (
    <React.Fragment>
      <br></br>
      <Outlet />
    </React.Fragment>
  );
};
