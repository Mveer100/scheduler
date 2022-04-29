import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = spotCount(state.days, appointments);
    
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        setState({ ...state, appointments, days  });
      })
      .catch((error) => {
        throw error;
      });
  }

  function cancelInterview(appointmentId) {
    const appointment = {
      ...state.appointments[appointmentId],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [appointmentId]: appointment,
    };
    const days = spotCount(state.days, appointments);
    return axios
      .delete(`/api/appointments/${appointmentId}`)
      .then(() => {
        setState({ ...state, appointments, days });
      })
      .catch((error) => {
        throw error;
      });
  }

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:8001/api/days`), //index0
      axios.get(`http://localhost:8001/api/appointments`), //index1
      axios.get(`http://localhost:8001/api/interviewers`),
    ]).then((all) => {
      // console.log("INTERVIEWERS LOG", all)
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  function spotCount(days, appointments) {
    const daysArray = days.map((day) => {
      //pinpoints the day object

      let counter = 0;

      const appointmentsArray = day.appointments;

      for (const number of appointmentsArray) {
        if (!appointments[number].interview) {
          counter++;
        }
      }
      return { ...day, spots: counter }; //array of days holds this object for each day
    });
    return daysArray;
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
