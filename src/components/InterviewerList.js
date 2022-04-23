import React /* { useState } */ from "react";
import classNames from "classnames";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
// import DayList from "./DayList";
// interviewers: an array of objects each object represents an interviewer and includes their id, name and avatar(imglink)
export default function InterviewerList(props) {

  const interviewers = props.interviewers.map(interviewer =>{
    console.log(props, "    PROPS  ")
    return (
      <InterviewerListItem
        key={interviewer.id}
      
        id={interviewer.id}
        
        name={interviewer.name}

        avatar={interviewer.avatar}
        
        selected={interviewer.id ===  props.interviewer}

        setInterviewer={(e) => props.setInterviewer(interviewer.id)}

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
// let dayClass = classNames("day-list__item", {
//   "--selected": selected,
//   "--full": (spots === 0)
// });

// const handleButtonClick = () => {
//   if (props.disabled) {
//     buttonClass += " button--disabled";
//   }
// }