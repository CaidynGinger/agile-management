import React from "react";
import classes from "./TopHeader.module.css";

import headerImage from "../../../Imgs/logo 2.png";
import { Button } from "../../../UI/Button/Button";

export const TopHeader = (props) => {
  return (
    <div className={classes.header}>
      <div className={`${classes.header_col} ${classes.header_left}`}>
        <div
          onClick={props.SideNavTogglerHandler}
          className={classes.icon_helper}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className={classes.frame}>
          <span className={classes.helper}></span>
          <img src={headerImage} alt="company logo" />
        </div>
      </div>
      <div className={`${classes.header_col} ${classes.header_right}`}>
        <div className={classes.logout_btn}>
          <Button>logout</Button>
        </div>
        <div className={classes.notification}>
          <div className={classes.notification_container}>
            <div className={classes.badge}>
              <p>3</p>
            </div>
            <ion-icon name="notifications-outline"></ion-icon>
          </div>
        </div>
        <div className={classes.icon_helper}>
          <ion-icon name="person-circle"></ion-icon>
        </div>
      </div>
    </div>
  );
};
