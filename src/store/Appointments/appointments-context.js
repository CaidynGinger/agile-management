import React from 'react'

const AppointmentsContext = React.createContext({
    appointmentList: [],
    showAppointmentForm: false,
    showAppointmentFormCall: () => {}
})

export default AppointmentsContext