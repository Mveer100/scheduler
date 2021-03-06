import React from "react";
// import Button from "components/Button";


export default function Status({message}) {
  // console.log(onCancel, "oncanceloncanceloncancel")
  // console.log(onConfirm, "onconfirmconfcoirm")
  return (
    <main className="appointment__card appointment__card--status">
  <img
    className="appointment__status-image"
    src="images/status.png"
    alt="Loading"
  />
  <h1 className="text--semi-bold">{message}</h1>
</main>
  );
}
