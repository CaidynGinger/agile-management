import React, { useEffect, useReducer } from "react";
import AppointmentsContext from "./appointments-context";

const defaultAppointmentList = {
  appointmentList: [],
  showAppointmentForm: false
};

const AppointmentListReducer = (state, action) => {
  if (action.type === "SET_APPOINTMENTS_FROM_SERVER") {
    return {
      ...state,
      appointmentList: action.data,
    };
  }
  if(action.type === "ADD_APPOINTMENT") {
    console.log(!state.showAppointmentForm)
    return{
      ...state,
      showAppointmentForm: !state.showAppointmentForm
    }
  }
  return defaultAppointmentList;
};

export const AppointmentsProvider = (props) => {
  const [appointmentListState, dispatchAppointmentListAction] = useReducer(
    AppointmentListReducer,
    defaultAppointmentList
  );

  useEffect(() => {
    let GotAppointmentList = [
      {
        id: "1",
        patientName: "Bill",
        date: "2022/05/02",
        Doctor: "Stingo",
        startTime: "08:00",
        endTime: "08:30",
      },
      {
        id: "2",
        patientName: "Bill",
        date: "2022/05/03",
        Doctor: "Stingo",
        startTime: "08:00",
        endTime: "08:30",
      },
      {
        id: "3",
        patientName: "Bill",
        date: "2022/05/03",
        Doctor: "Stingo",
        startTime: "10:00",
        endTime: "11:00",
      },
      {
        id: "4",
        patientName: "Bill",
        date: "2022/06/07",
        Doctor: "Stingo",
        startTime: "10:00",
        endTime: "11:00",
      },
      {
        id: "5",
        patientName: "Bill",
        date: "2022/06/03",
        Doctor: "Stingo",
        startTime: "10:00",
        endTime: "11:00",
      },
      {
        id: "6",
        patientName: "Bill",
        date: "2022/08/03",
        Doctor: "Stingo",
        startTime: "10:00",
        endTime: "11:00",
      },
      {
        id: "7",
        patientName: "Caidyn",
        date: "2022/05/27",
        Doctor: "Stingo",
        startTime: "10:00",
        endTime: "11:00",
      },{
        id: "8",
        patientName: "Alex",
        date: "2022/05/18",
        Doctor: "Stingo",
        startTime: "10:00",
        endTime: "11:00",
      },
    ];
    dispatchAppointmentListAction({
      type: "SET_APPOINTMENTS_FROM_SERVER",
      data: GotAppointmentList,
    });
  }, []);

  const showAppointmentFormCall = () => {
    dispatchAppointmentListAction({
      type: "ADD_APPOINTMENT",
    });
  }

  const appointmentListContext = {
    appointmentList: appointmentListState.appointmentList,
    showAppointmentForm: appointmentListState.showAppointmentForm,
    showAppointmentFormCall: showAppointmentFormCall
  };

  return (
    <AppointmentsContext.Provider value={appointmentListContext}>
      {props.children}
    </AppointmentsContext.Provider>
  );
};
