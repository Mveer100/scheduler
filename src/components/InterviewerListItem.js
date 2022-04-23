import React, { useState } from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem({
  id,
  name,
  avatar,
  selected,
  setInterviewer
}) {
  let interviewerClass = classNames(
    "interviewers__item"
, {
    "interviewers__item--selected": selected
  })
  // console.log(interviewerClass, 'INTERVIEWER CALSS')
  const handleInterviewerClick = () => setInterviewer;

  return (
    <li onClick={handleInterviewerClick(id)} className={interviewerClass}>
      <img className="interviewers__item-image" src={avatar} alt={name} id={id}/>
      {selected && name}
    </li>
  );
}

// let dayClass = classNames("day-list__item", {
//   "--selected": selected,
//   "--full": (spots === 0)
// });

// const handleButtonClick = () => {
//   if (props.disabled) {
//     buttonClass += " button--disabled";
//   }
// }
