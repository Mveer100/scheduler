import React, { useState } from "react";
import classNames from "classnames";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types'; 
// import DayList from "./DayList";
// interviewers: an array of objects each object represents an interviewer and includes their id, name and avatar(imglink)
export default function InterviewerList(props) {

  const interviewers = props.interviewers.map(interviewer =>{
    // console.log(props, "    PROPS  ")
    // id={interviewer.id}
    // {props.onChange(interviewer.id)}
    return (
      <InterviewerListItem
        key={interviewer.id}
      
        
        name={interviewer.name}

        avatar={interviewer.avatar}
        
        selected={interviewer.id === props.value}

        setInterviewer={() => props.onChange(interviewer.id)}

    />
    )
})
 return (
  <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">
    {interviewers}</ul>
</section>
 );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};






// let dayClass = classNames("day-list__item", {
//   "--selected": selected,
//   "--full": (spots === 0)
// });

// const handleButtonClick = () => {
//   if (props.disabled) {
//     buttonClass += " button--disabled";
//   }
// }
