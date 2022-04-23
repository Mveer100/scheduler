import React from "react";

export default function Shows({student, interviewer, onEdit, onDelete}) {
console.log(student, "student")
console.log(interviewer, 'interviewer')
  return (
    <main className="appointment__card appointment__card--show">
  <section className="appointment__card-left">
    <h2 className="text--regular">Studentnamehere</h2>
    <section className="interviewer">
      <h4 className="text--light">Interviewer</h4>
      <h3 className="text--regular">SylviaLastName</h3>
    </section>
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <img
        className="appointment__actions-button"
        src="images/edit.png"
        alt="Edit"
        onClick={(onEdit)}
      />
      <img
        className="appointment__actions-button"
        src="images/trash.png"
        alt="Delete"
        onClick={(onDelete)}
      />
    </section>
  </section>
</main>
  );
}