import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

// name: string
// spots:Number
// selected:|3()()|_3/-\|\| = BOOLEAN in computer mode
//setDay:Function
export default function DayListItem({ name, spots, selected, setDay }) {
  
  let dayClass = classNames( "day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0,
  });
  // console.log(spots, "SPOTSPSOTSPOTSPTO")
  const formatSpots = () => {
    if (spots === 1) {
      return "1 spot remaining";
    }
    if (spots === 0) {
      return "no spots remaining";
    } else {
      return `${spots} spots remaining`;
    }
  };

  return (
    <li
      className={dayClass}
      onClick={() => {
        setDay(name);
      }}
    >
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}

/*
CONDITIONALS = 
day-list__item all the time

day-list__item--selected class name if props.selected is true

day-list__item--full class name if props.spots is 0.


Need to update our component to apply the day-list__item--selected and day-list__item--full styles based on the props we are passing to DayListItem using the classnames library


*/
