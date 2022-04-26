import React from "react";
// import classNames from "classnames";
import DayListItem from "./DayListItem.js";
// import "components/DayList.scss";

// days:Array an array of objects (each object represents a day and includes an id, name, and spots)
// day:String 
// setDay:Function sets the currently selected day and accepts the name of the day eg. "Monday", "Tuesday"

export default function DayList({ value, onChange, days}) {

  // console.log("THIS IS THE DAY!!!!!!", days)
  const daysArr = days.map(({id, name, spots}) => {
    // props.day is current day name
    //props.days.name is the selected day
    return (
      <DayListItem
      key={id}
      name={name}
      spots={spots} 
      selected={name === value}
      setDay={onChange} 
      />)
  });

  return (
 <ul>
  {daysArr}
 </ul>
  );
}
