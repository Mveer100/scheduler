
/*
getAppointmentsForDay function returns the correct array based on the value of state and state.day
*/

// const result = ages.filter(age >= 18);



export function getAppointmentsForDay(state, day) {
  // console.log(state.days.length)
  // console.log(day)
  
  const selectedDay = state.days.find(element => element.name === day)
  
  // console.log(selectedDay)
  if(state.days.length === 0) return []
  else if(!selectedDay) return [];
  const appointmentIds = selectedDay.appointments;

  const appointments = appointmentIds.map((id => state.appointments[id]))
  // console.log(appointments)
  
  return appointments;
  
}

// statetesters {
//   days: [
//     { id: 1, name: 'Monday', appointments: [Array] },
//     { id: 2, name: 'Tuesday', appointments: [Array] }
//   ],
//   appointments: {
//     '1': { id: 1, time: '12pm', interview: null },
//     '2': { id: 2, time: '1pm', interview: null },
//     '3': { id: 3, time: '2pm', interview: [Object] },
//     '4': { id: 4, time: '3pm', interview: null },
//     '5': { id: 5, time: '4pm', interview: [Object] }
//   },
//   interviewers: {
//     '1': {
//       id: 1,
//       name: 'Sylvia Palmer',
//       avatar: 'https://i.imgur.com/LpaY82x.png'
//     },
//     '2': {
//       id: 2,
//       name: 'Tori Malcolm',
//       avatar: 'https://i.imgur.com/Nmx0Qxo.png'
//     }
//   }
// }
//  interview = {student: 'Archie Cohen', interviewer: 2 }
//state = /*  */
export function getInterview(state, interviewAppointment) {
//must return null if interview is a falsy value)
  if (!interviewAppointment) return null;
  // console.log("innerviewtester", interviewAppointment)

  const  {student: studentName, interviewer: interviewerID} = interviewAppointment;
  
  
  return {
    student: studentName,
    interviewer: state.interviewers[interviewerID]
  }
  
};

// array of appointment ids : object of appointments
  // 

  // console.log(state.days[0].name, "testetetsdt")
  // console.log(element.appointments,"elementelenemene") 
  // console.log(element.name, "ELEMENT DOT A ANAME")
  // console.log(day, 'DAY DAY DAY LOGGING DAY')