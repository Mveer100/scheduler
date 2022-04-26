import React, { useState } from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
// <Empty> = well that should be obvious maxwell(It's empty)
// <Show> = When it is booked
// <Confirm> = When we want a user to confirm an action
// <Status> = When it's loading
// <Error> = When there is an error

export default function Appointment(props) {
  // console.log(props, "__________PROPS_________")
  // function save(name, interviewer) {
  //   const interview = {
  //     student: name,
  //     interviewer
  //   };
  // }
  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty {...props} />}
    </article>
  );
}

// {props.time ? `Appointment at ${props.time}` : "No appointments"}

