import React, { useCallback, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Doctor } from "./Doctor/Doctor";

import { Button } from "../../../../UI/Button/Button";
import { Input } from "../../../../UI/Input/Input";

import classes from "./DoctorsList.module.css";

export const DoctorsList = () => {

  const [DoctorList, setDoctorList] = useState() 
  const [IsLoading, setIsLoading] = useState(false)
  const [Error, setError] = useState(null)

  const FetchAllDoctors = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/doctors", {method: "GET"});
      if(!response.ok){
        throw new Error("something went Wrong!")
      }
      const data = await response.json()
      setDoctorList(data)
      console.log(data);
    }catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  })

  useEffect(() => {
    FetchAllDoctors()
  }, [])
  
  return (
    <React.Fragment>
      <Row>
        <Col md={11}>
          <Input type="text" id="doctor-search" label="Search Doctor" />
        </Col>
        <Col md={1}>
          <Button>Search</Button>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <div className={classes.doctor_list}>
            <Doctor />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
