import React, { useCallback, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Doctor } from "./Doctor/Doctor";

import { Button } from "../../../../UI/Button/Button";
import { Input } from "../../../../UI/Input/Input";

import classes from "./DoctorsList.module.css";
import { LoadingAniamtion } from "../../../../UI/LoadingAnimation/LoadingAniamtion";
import { AddDoctorForm } from "./AddDoctorForm/AddDoctorForm";
import { Modal } from "../../../../UI/Modal/Modal";

export const DoctorsList = () => {
  const [showAddDoctorForm, setShowAddDoctorForm] = useState(false);

  const [DoctorList, setDoctorList] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(null);

  const FetchAllDoctors = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/doctors/list", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("something went Wrong!");
      }
      const data = await response.json();
      setDoctorList(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  });

  useEffect(() => {
    // FetchAllDoctors();
    setDoctorList([{ id: 1, firstName: "Caidyn" , lastName: 'Ginger', specialization: "Something", roomNumber: 1}]);
  }, []);

  const showAddDoctorFormHandler = () => {
    setShowAddDoctorForm((prevState) => !prevState);
  };

  let content = (
    <>
      <h4>Doctors List</h4>
      <Row>
        <Col md={11}>
          <Input type="text" id="doctor-search" label="Search Doctor" />
        </Col>
        <Col md={1}>
          <Button>Search</Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <div className={classes.doctor_list}>
            <Doctor DoctorList={DoctorList} />
          </div>
        </Col>
      </Row>
      <div onClick={showAddDoctorFormHandler} className={classes.badge}>
        <ion-icon name="add-outline"></ion-icon>
      </div>
    </>
  );

  return (
    <React.Fragment>
      {IsLoading && <LoadingAniamtion />}
      {!IsLoading && content}
      <AddDoctorForm
        showAddDoctorForm={showAddDoctorForm}
        showAddDoctorFormHandler={showAddDoctorFormHandler}
      />
    </React.Fragment>
  );
};
