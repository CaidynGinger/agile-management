import React, { Fragment } from "react";
import reactDom from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  if (props.type === "side_nav") {
    let cssClasses = `${classes.modal} ${classes.side_nav}`;
    if (props.ShowHide) {
      cssClasses = `${cssClasses} ${classes.left}`;
    }
    return (
      <div className={cssClasses}>
        <div>{props.children}</div>
      </div>
    );
  } else if (props.type === "Form") {
    if (props.ShowHide) {
      return (
        <div className={`${classes.modal} ${classes.form} ${classes.top}`}>
          <div>{props.children}</div>
        </div>
      );
    }
    return (
      <div className={`${classes.modal} ${classes.form}`}>
        <div>{props.children}</div>
      </div>
    );
  } else if (props.type === "Test") {
    return <>{props.children}</>;
  }
};

const portalElement = document.getElementById("overlays");

export const Modal = (props) => {
  return (
    <Fragment>
      {props.ShowHide &&
        reactDom.createPortal(
          <Backdrop onClick={props.onClick} />,
          portalElement
        )}
      {reactDom.createPortal(
        <ModalOverlay type={props.type} ShowHide={props.ShowHide}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
