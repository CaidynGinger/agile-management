import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

import ProfilePicture from "../../../../../../Imgs/img.jpg";
import { Button } from "../../../../../../UI/Button/Button";
import { Input } from "../../../../../../UI/Input/Input";

import classes from "./Profile.module.css";

export const Profile = () => {
  let params = useParams();

  const [Doctor, setDoctor] = useState({});
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    // get doctor details
    setDoctor(
      {
        id: 1,
        firstName: "Caidyn",
        lastName: "Ginger",
        specialization: "Something",
        roomNumber: 1,
      },
    );
  }, []);

  console.log(Doctor);



  return (
    <React.Fragment>
        <div className={classes.noEdit}></div>

      <Container>
        <Row>
          <h3 className={classes.header}>Doctor ID: {params.doctorId}</h3>
          <Col md={2}>
            <img
              className={classes.profile_image}
              alt="selected profile profile picture"
              src={ProfilePicture}
            />
          </Col>
          <Col md={10}>
            <form className={classes.from}>
              <hr></hr>
              <h4>Personal Details</h4>
              <Row>
                <Col>
                  <Input
                    label="First Name"
                    type="text"
                    value={Doctor.firstName}
                  />
                </Col>
                <Col>
                  <p>{Doctor.lastName}</p>
                </Col>
                <Col>
                  <p>21</p>
                </Col>
                <Col>
                  <p>Female</p>
                </Col>
              </Row>
              <br></br>
              <hr></hr>
              <h4>Other Details</h4>
              <Row>
                <Col>
                  <Input
                    label="E-mail"
                    type="email"
                    value={"Kiara@example.com"}
                  />
                </Col>
                <Col>
                  <Input
                    label="phone Number"
                    type="number"
                    value={"0816557744"}
                  />
                </Col>
                <Col>
                  <Input
                    label="Specilisation"
                    type="text"
                    value={"Soemhting"}
                  />
                </Col>

                <Col>
                  <Input label="Room Number" type="text" value={"4A"} />
                </Col>
              </Row>
              <br></br>
              <Row className="justify-content-end">
                <div className={`${classes.edit_btn} ${classes.btn}`}>
                  <Button>Edit</Button>
                </div>
                <div className={`${classes.save_btn} ${classes.btn}`}>
                  <Button>Save</Button>
                </div>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      {/* <Container>
        <Row>
          <Col md={10}>
            <form className={classes.from}>
              <h3>Doctor ID: {params.doctorId}</h3>
              <hr></hr>
              <h4>Personal Details</h4>
              <Row>
                <Col>
                  <Input
                    label="First Name"
                    type="text"
                    value={FirstName}
                    onChange={namehandler}
                  />
                </Col>
                <Col>
                  <Input label="Last Name" type="text" value={"Bahadur"} />
                </Col>
                <Col>
                  <Input label="Age" type="number" value={21} />
                </Col>
                <Col>
                  <Input label="Gender" type="text" value={"Female"} />
                </Col>
              </Row>
              <br></br>
              <hr></hr>
              <h4>Other Details</h4>
              <Row>
                <Col>
                  <Input
                    label="E-mail"
                    type="email"
                    value={"Kiara@example.com"}
                  />
                </Col>
                <Col>
                  <Input
                    label="phone Number"
                    type="number"
                    value={"0816557744"}
                  />
                </Col>
                <Col>
                  <Input
                    label="Specilisation"
                    type="text"
                    value={"Soemhting"}
                  />
                </Col>

                <Col>
                  <Input label="Room Number" type="text" value={"4A"} />
                </Col>
              </Row>
              <br></br>
              <Row className="justify-content-end">
                <div className={`${classes.edit_btn} ${classes.btn}`}>
                  <Button onClick={editdetailshandler}>Edit</Button>
                </div>
                <div className={`${classes.save_btn} ${classes.btn}`}>
                  <Button>Save</Button>
                </div>
              </Row>
            </form>
          </Col>
          <Col md={2}>
            <img
              className={classes.profile_image}
              alt="selected profile profile picture"
              src={ProfilePicture}
            />
          </Col>
        </Row>
      </Container> */}
    </React.Fragment>
  );
};
