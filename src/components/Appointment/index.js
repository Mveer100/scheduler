import React, { useState } from "react";

import "./styles.scss";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import { getInterviewersForDay } from "helpers/selectors";

import useVisualMode from "components/hooks/useVisualMode";
// <Empty> = well that should be obvious maxwell(It's empty)
// <Show> = When it is booked
// <Confirm> = When we want a user to confirm an action
// <Status> = When it's loading
// <Error> = When there is an error
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING"

export default function Appointment(props) {
  console.log(props, "__________PROPS_________");

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  const { days, interviewers, day, bookInterview } = props;

  const interviewersArr = getInterviewersForDay({ days, interviewers }, day);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(() => transition(SHOW));
  }
  function onDelete() {
    transition(DELETING)
    props.cancelInterview(props.id).then(() => transition(EMPTY));
  }
console.log(props, "props why are you nul")
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW &&  <Show
          onDelete={() => transition(CONFIRM)}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        /> }
      {mode === SAVING && <Status message="SAVING!!!!!!!!!!!!!!!!!11111" />}
      {mode === DELETING && <Status message="DEEEE-LITE-ING!!!!!!!!!!!!!!!!!11111" />}
      {mode === CREATE && (
        <Form onSave={save} interviewers={interviewersArr} onCancel={back} />
      )}
      {mode === CONFIRM && (
        <Confirm message="DELETING" onCancel={back} onConfirm={onDelete} />
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
