

export function getAppointmentsForDay(state, day) {
  const { days, appointments } = state;
  // console.log(state, "STATE GETAPPDAY")

  const dayObj = days.find((element) => element.name === day);

  if (days.length === 0 || dayObj === undefined) return [];

  return dayObj.appointments.map((id) => appointments[id]);
}
// -----------

export function getInterviewersForDay(state, day) {

  const { days = [] , interviewers } = state;
  // console.log(days, "DAYSDAYS");
console.log(days, "DAYS!!!")
  const dayObj = days.find((element) => element.name === day);
  if (days.length === 0 || dayObj === undefined) return [];


  // console.log(dayObj, "dayobjdayojb");

  // console.log(dayObj, "DAYOBJ")
  return dayObj.interviewers.map((id) => interviewers[id]);
}

// -----------

export function getInterview(state, interviewAppointment) {
  //must return null if interview is a falsy value)
  if (!interviewAppointment) return null;
  // console.log("innerviewtester", interviewAppointment)

  const { student: studentName, interviewer: interviewerID } =
    interviewAppointment;

  return {
    student: studentName,
    interviewer: state.interviewers[interviewerID],
  };
}
