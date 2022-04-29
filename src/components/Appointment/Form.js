import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const { interviewers, onSave, onCancel } = props;
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [formError, setFormError] = useState("");

  //resets the state of the form component
  const reset = () => {
    console.log("reset");
    setStudent("");
    setInterviewer(null);
  };
  //Cancels the current user action, relevant to the confirmation of user actions
  const cancel = () => {
    reset();
    onCancel();
  };

  function validate() {
    if (student === "") {
      setFormError("Student name cannot be blank");
      return;
    }
    // if (interviewer === null) {
    //   setFormError("Please select an interviewer");
    //   return;
    // }
    setFormError("");
    onSave(student, interviewer);
  }
  
  
  // console.log(student, interviewer,  "student")
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{formError}</section>
        <InterviewerList
          interviewers={interviewers}
          onChange={setInterviewer}
          value={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>
            Cancel
          </Button>
          <Button
            onClick={() => {
              validate()
        
            }}
            confirm
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}


      // if (!student && !interviewer) {
              //   setFormError("WHO ARE YOU AND WHO WILL INTERVIEW YOU?????!!!!???");
              // } else if (!interviewer) {
              //   setFormError("Please select an interviewer")
              // } else if (!student) {
              //   setFormError("Enter Student Name")
              // }
              // onSave(student, interviewer);