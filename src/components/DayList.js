import React from "react";
// import classNames from "classnames";
import DayListItem from "./DayListItem.js";
// import "components/DayList.scss";

// days:Array an array of objects (each object represents a day and includes an id, name, and spots)
// day:String 
// setDay:Function sets the currently selected day and accepts the name of the day eg. "Monday", "Tuesday"

export default function DayList(props) {

  const days = props.days.map(day => {
    console.log(" PROPSDAYLOG ", props)
    // props.day is current day name
    //props.days.name is the selected day
    return (
      <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots} 
      selected={day.name === props.day}
      setDay={props.setDay} 
      />)
  });

  return (
 <ul>
  {days}
 </ul>
  );
}
