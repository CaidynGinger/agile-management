import React from "react";

export const detail = props => {
  return (
    <Col>
      <p className={classes.profile_label}>{props.label}</p>
      <p className={classes.profile_detail}>{props.detail}</p>
    </Col>
  );
};
