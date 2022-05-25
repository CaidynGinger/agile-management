import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppointmentsContext from "../../../../store/Appointments/appointments-context";
import { Modal } from "../../../../UI/Modal/Modal";
import headerImage from "../../../../Imgs/logo 2.png";
import { Button } from "../../../../UI/Button/Button";

import classes from "./AddAppointmentForm.module.css";

export const AddAppointmentForm = () => {
  const appointmentListCtx = useContext(AppointmentsContext);

  return (
    <Modal
      type={"Form"}
      ShowHide={appointmentListCtx.showAppointmentForm}
      onClick={appointmentListCtx.showAppointmentFormCall}
    >
      <form autoComplete="off">
        <Container>
          <Row>
            <img alt="company logo" src={headerImage} />
          </Row>
          <Row>
            <p>Add new Appointment</p>
          </Row>
          <Row>
            <Col md={7}></Col>
            <Col md={5}>
              <div className={classes.button_center}>
                <Button>Add New Patient</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
          _____ pacentdetails
          <Row>docrot</Row>
          <Row>date</Row>
          <Row>srat time end</Row>
          <Row>notes</Row>
        </Container>
      </form>
    </Modal>
  );
};
