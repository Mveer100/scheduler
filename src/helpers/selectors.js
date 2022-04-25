
/*
getAppointmentsForDay function returns the correct array based on the value of state and state.day
*/

// const result = ages.filter(age >= 18);


export function getAppointmentsForDay(state, day) {
  // console.log(state.days.length)
  // console.log(day)
  
  const selectedDay = state.days.find(element => element.name === day)
  
  console.log(selectedDay)
  if(state.days.length === 0) return []
  else if(!selectedDay) return [];
  const appointmentIds = selectedDay.appointments;

  const appointments = appointmentIds.map((id => state.appointments[id]))
  console.log(appointments)
  
  return appointments;
  
}


// array of appointment ids : object of appointments
  // 

  // console.log(state.days[0].name, "testetetsdt")
  // console.log(element.appointments,"elementelenemene") 
  // console.log(element.name, "ELEMENT DOT A ANAME")
  // console.log(day, 'DAY DAY DAY LOGGING DAY')