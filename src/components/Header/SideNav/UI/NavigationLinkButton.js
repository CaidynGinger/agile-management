import React from "react";
import { Link } from "react-router-dom";

import "../SideNav.module.css";

export const NavigationLinkButton = (props) => {
  return (
    <li >
      <Link onClick={props.onClick}  to={props.to}>
        <div >
          {props.customIcon ? (
            <ion-icon src={props.iconName}></ion-icon>
          ) : (
            <ion-icon name={props.iconName}></ion-icon>
          )}

          <p>{props.linkName}</p>
        </div>
      </Link>
    </li>
  );
};
