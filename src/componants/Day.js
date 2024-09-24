import React from 'react'

const Day = (props) => {
    const weekDays = () => [
        "monday",
        "tueesday",
        "wednesday",
        "thursday",
        "friday",
        "saterday",
        "sunday",
    ]
    const date = new Date();

    const dayAsNumber = date.getDay();

    //return <div>Today is {weekDays[dayAsNumber]}</div>;//

    return(
        <div>
            {props.short === false ? "Today is" : ""} {weekDays[dayAsNumber]}
        </div>
    )
      
       
    
    }
       


export default Day;