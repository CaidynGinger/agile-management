import React from "react";
import { Modal } from "../../../UI/Modal/Modal";

import classes from "./SideNav.module.css";

import headerImage from "../../../Imgs/logo 2.png";
import { NavigationLinkButton } from "./UI/NavigationLinkButton";

import doctorSVG from "../../../Imgs/doctors.svg";

export const SideNav = (props) => {
  const linksList = [
    {
      id: 0,
      iconName: "calendar-outline",
      linkName: "Calender",
      customIcon: false,
      link: "/",
    },
    {
      id: 1,
      iconName: doctorSVG,
      customIcon: true,
      linkName: "Doctors List",
      link: "doctors-list",
    },
  ];
  return (
    <Modal
      type={"side_nav"}
      ShowHide={props.ShowSideNav}
      onClick={props.SideNavTogglerHandler}
    >
      <div className={classes.side_nav}>
        <div className={classes.header_icon}>
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
        <ul className={classes.navigation_list}>
          {linksList.map((item) => {
            return (
              <NavigationLinkButton
                key={item.id}
                to={item.link}
                iconName={item.iconName}
                linkName={item.linkName}
                customIcon={item.customIcon}
                onClick={props.SideNavTogglerHandler}
              />
            );
          })}
        </ul>
      </div>
    </Modal>
  );
};
