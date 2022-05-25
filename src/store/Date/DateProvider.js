import React, { useReducer } from "react";
import DateContext from "./date-context";

const defaultDateState = {
  currentAppDateRange: new Date(),
};

const DateReducer = (state, action) => {
  let date = new Date(state.currentAppDateRange);
  if (action.type === "RESET_DATE") {
    return defaultDateState;
  }
  if (action.type === "ADD_ONE_MONTH") {
    let newDate = new Date(date.setMonth(date.getMonth() + 1));
    return {
        currentAppDateRange: newDate
    }
  }
  if (action.type === "SUBTRACT_ONE_MONTH") {
    let newDate = new Date(date.setMonth(date.getMonth() - 1));
    return {
        currentAppDateRange: newDate
    }
  }
  return defaultDateState;
};

export const DateProvider = (props) => {
  const [DateState, dispatchDateAction] = useReducer(
    DateReducer,
    defaultDateState
  );

  const resetDate = () => {
    dispatchDateAction({
        type: "RESET_DATE",
      });
  }

  const addOneMonth = () => {
    dispatchDateAction({
      type: "ADD_ONE_MONTH",
    });
  };

  const subtractOneMonth = () => {
    dispatchDateAction({
      type: "SUBTRACT_ONE_MONTH",
    });
  };

  const dateContext = {
    currentAppDateRange: DateState.currentAppDateRange,
    dateRangeHelper: DateState.dateRangeHelper,
    addOneMonth: addOneMonth,
    subtractOneMonth: subtractOneMonth,
    resetDate: resetDate
  };

  return (
    <DateContext.Provider value={dateContext}>
      {props.children}
    </DateContext.Provider>
  );
};
