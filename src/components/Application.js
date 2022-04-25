import React, { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay } from "helpers/selectors";
// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];

// const appointments = {
//   "1": {
//     id: 1,
//     time: "12pm",
//   },
//   "2": {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer:{
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   "3": {
//     id: 3,
//     time: "2pm",
//   },
//   "4": {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer:{
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   "5": {
//     id: 5,
//     time: "4pm",
//   }
// };
export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {},
  });
  const dailyAppointments = getAppointmentsForDay( state, state.day)
  const setDay = (day) => setState({ ...state, day });
  // const setDays = days => setState(prev => ({...prev, days}));

  console.log("THISISTHESTATELOG", state);
  
  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`), //index0
      axios.get(`/api/appointments`), //index1
    ]).then((all) => {
      setState(prev =>({...prev, days: all[0].data, appointments: all[1].data}));
      // console.log(all[0], "APIreq days");
      // console.log(all[1], "apireq Appointments")
    });
    
    // axios.get(`/api/days`).then((res) => {
    //   // setDays(res.data)
    // });
  }, []);

  const appointment = dailyAppointments.map(({ id, time, interview }) => {
    return <Appointment key={id} id={id} time={time} interview={interview} />;
  });

  // {props.interview ? <Show student={props.student} interviewer={props.interviewer} /> : <Empty />}
  console.log(appointment, "BING CHILLING");
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointment}
      <Appointment time={'5pm'} />
        </section>
    </main>
  );
}
