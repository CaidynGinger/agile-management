import React from 'react'

const DateContext = React.createContext({
    currentAppDateRange: new Date(),
    addOneMonth: () => {},
    subtractOneMonth: () => {},
    resetDate: () => {}
})

export default DateContext