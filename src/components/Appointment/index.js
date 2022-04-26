import React, { useState } from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "components/hooks/useVisualMode";
// <Empty> = well that should be obvious maxwell(It's empty)
// <Show> = When it is booked
// <Confirm> = When we want a user to confirm an action
// <Status> = When it's loading
// <Error> = When there is an error

export default function Appointment(props) {
  console.log(props, "__________PROPS_________")
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE ="CREATE"
  const {mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  // if(props.interview) {
  //   useVisualMode(SHOW);
  // } else {
  //   useVisualMode(EMPTY);
  // }
 
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
  {mode === SHOW && (
    <Show
      student={props.interview.student}
      interviewer={props.interview.interviewer}
    />
  )}
  {mode === CREATE && (
    <Form
      interviewers={[]} onCancel={()=>back()}
    />
  )}
    </article>
  );
}

// {props.time ? `Appointment at ${props.time}` : "No appointments"}

// {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty {...props} />}

 // function save(name, interviewer) {
  //   const interview = {
  //     student: name,
  //     interviewer
  //   };
  // }