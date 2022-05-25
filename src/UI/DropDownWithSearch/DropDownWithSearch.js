import React, { useCallback, useEffect, useState } from "react";
import { Input } from "../Input/Input";

import styles from "./DropDownWithSearch.module.css";

export const DropDownWithSearch = ({
  type,
  id,
  required,
  label,
  dropdownList,
  onSelectHandler
}) => {
  const [InputValue, setInputValue] = useState("");
  const [ShowDropDown, setShowDropDown] = useState(false);

  const selectHouseholdHandler = useCallback(event => {
    setInputValue(event.target.innerHTML)
    onSelectHandler(event.target.innerHTML)
  },[onSelectHandler])

  const [dropdownListRender, setDropdownListRender] = useState([]);

  useEffect(() => {
    const filteredDropdownList = dropdownList.filter(houseHold => houseHold.title.toLowerCase().includes(InputValue.toLowerCase()))
    setDropdownListRender(
        filteredDropdownList.map((houseHold) => (
        <p key={houseHold.id} onClick={selectHouseholdHandler}>{houseHold.title}</p>
      ))
    );
  }, [InputValue, dropdownList, selectHouseholdHandler]);

  const dropdownInputHandler = () => {
    setInputValue('')
    setShowDropDown((prevState) => !prevState);
  };

  const dropdownInputHandlerOnBlur = () => {
      setTimeout(() => {
        setShowDropDown((prevState) => false);
      }, 100);
  }

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const DropDownStyle = ShowDropDown
    ? `${styles.dropdown_container} ${styles.show_dropdown}`
    : `${styles.dropdown_container}`;
  return (
    <form autoComplete="off">
      <Input
        onClick={dropdownInputHandler}
        type={type}
        id={id}
        required={required}
        label={label}
        onBlur={dropdownInputHandlerOnBlur}
        onChange={onChangeHandler}
        value={InputValue}
      />
      <div id="dropdown" className={DropDownStyle}>
        <div>{dropdownListRender}</div>
      </div>
    </form>
  );
};
