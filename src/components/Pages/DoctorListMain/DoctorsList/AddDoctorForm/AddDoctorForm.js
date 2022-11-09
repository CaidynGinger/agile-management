import React from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "../../../../../UI/Button/Button";
import { Input } from "../../../../../UI/Input/Input";
import { Modal } from "../../../../../UI/Modal/Modal";

import classes from "./AddDoctorForm.module.css";

export const AddDoctorForm = (props) => {

    let cssClasses = `${classes.modal}`

    if(props.showAddDoctorForm) {
        cssClasses = `${classes.modal} ${classes.show_modal}`
    }


  return (
    <Modal
      type={"Test"}
      ShowHide={props.showAddDoctorForm}
      onClick={props.showAddDoctorFormHandler}
    >
      <form className={cssClasses}>
        <h4>Add A New Doctor</h4>
        <br></br>
        <Row>
          <Col>
            <Input type="text" label="First Name" />
          </Col>
          <Col>
            <Input type="text" label="Last Name" />
          </Col>
        </Row>
        <br></br>
        <Col md={6}>
          <Input type="text" label="Birthday" />
        </Col>{" "}
        {/* datepicker needed */}
        <br></br>
        <Row>
          <Col>
            <Input type="text" label="Email" />
          </Col>
          <Col>
            <Input type="text" label="Contact Number" />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Input type="text" label="Gender" />
          </Col>
          <Col>
            <Input type="text" label="Room Number" />
          </Col>
        </Row>
        <br></br>
        <Col md={6}>
            <Input type="text" label="Specialisation" />
          </Col>
        <br />
        <div className={classes.btn_container}>
          <Button>Add Doctor</Button>
        </div>
      </form>
    </Modal>
  );
};

// {
//     "first_name": "Kiara",
//     "last_name": "Bahadur",
//     "birth_day": "1998-08-23T00:00:00.000Z",
//     "contact_number": "0824456767",
//     "email": "kiara.bhadur@example.com",
//     "gender": "female",
//     "tombstone": false,
//     "room": 5,
//     "specialisation": "Cardiologist"
// }
