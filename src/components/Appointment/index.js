import React, { useState } from "react";
import "./styles.scss"

// <Empty> = well that should be obvious maxwell(It's empty)
// <Show> = When it is booked
// <Confirm> = When we want a user to confirm an action
// <Status> = When it's loading
// <Error> = When there is an error


export default function Appointment(props) {
  return (
    <article className="appointment">
      {(props.time) ? `Appointment at ${props.time}` : "No appointments"}
    </article>
  );
}
