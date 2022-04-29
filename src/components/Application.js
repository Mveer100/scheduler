import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";
import useApplicationData from "./hooks/useApplicationData";
export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();
  // const setDay = (day) => setState({ ...state, day });
  // const [state, setState] = useState({

  //   day: "Monday",
  //   days: [],
  //   // you may put the line below, but will have to remove/comment hardcoded appointments variable
  //   appointments: {},
  //   interviewers: {},
  // });
  // useEffect(() => {
  //   Promise.all([
  //     axios.get(`http://localhost:8001/api/days`), //index0
  //     axios.get(`http://localhost:8001/api/appointments`), //index1
  //     axios.get(`http://localhost:8001/api/interviewers`),
  //   ]).then((all) => {
  //     // console.log("INTERVIEWERS LOG", all)
  //     setState((prev) => ({
  //       ...prev,
  //       days: all[0].data,
  //       appointments: all[1].data,
  //       interviewers: all[2].data,
  //     }));
  //   });
  // }, []);
  // console.log(state, "STATE")
  // function bookInterview(id, interview) {
    //   const appointment = {
      //     ...state.appointments[id],
      //     interview: { ...interview }
      //   };
      //   const appointments = {
        //     ...state.appointments,
        //     [id]: appointment
        //   };
        
        //   return axios.put(`http://localhost:8001/api/appointments/${id}`, {interview}).then(() => {
          //     setState({ ...state, appointments });
          //   })
          //   .catch((error) => {
            //     throw error;
            //   })
            // }
            // function cancelInterview(appointmentId) {
              //   const appointment = {
                //     ...state.appointments[appointmentId],
                //     interview: null,
  //   };
  //   const appointments = {
  //     ...state.appointments,
  //     [appointmentId]: appointment,
  //   };
  
  //   return axios
  //     .delete(`/api/appointments/${appointmentId}`)
  //     .then(() => {
  //       setState({ ...state, appointments, days });
  //     })
  //     .catch((error) => {
    //       throw error;
    //     });
    // };
    
    // console.log(dailyAppointments, "dailyapps");
    
    
    // console.log(state.interviewers, "innerviewers");

    const {days, appointments, day} = state;
    const dailyAppointments = getAppointmentsForDay({days, appointments}, day) 

    const schedule = dailyAppointments.map((appointment) => {
      const interview = getInterview(state, appointment.interview);
      return (
        <Appointment
        interviewers={state.interviewers}
        days={state.days}
        day={state.day}
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}        
      />
    );
  });
  
  

  // {props.interview ? <Show student={props.student} interviewer={props.interviewer} /> : <Empty />}
  // console.log(appointment, "BING CHILLING");
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
        {schedule} 
        <Appointment
    interviewers={state.interviewers}
    days={state.days}
    day={state.day}
    time="5pm"
  />
      </section>
    </main>
  );
}
