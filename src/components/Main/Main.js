import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

import classes from "./Main.module.css";

export const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <Container className={classes.container}>
        <Outlet />
      </Container>
    </React.Fragment>
  );
};
