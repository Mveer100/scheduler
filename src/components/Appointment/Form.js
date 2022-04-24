import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
// console.log(121241234123412)
export default function Form(props) {
  console.log("PROPS OF FORM PLEASE", props)
  // const {interviewers, onSave, onCancel} = props;
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewers || null);
  
  const reset = () => {
    console.log("reset");
    setStudent('');
    setInterviewer(null);
    
  };
  const cancel = () => {
    reset()
    props.onCancel()
  }
  

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            /*
          This must be a controlled component
          your code goes here
        */
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          onChange={setInterviewer}
          value={interviewer}

        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>Cancel</Button>
          <Button confirm>Save</Button>
        </section>
      </section>
    </main>
  );
}