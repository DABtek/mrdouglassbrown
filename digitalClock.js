// Digital clock — preserved from Doug's first Web Design class (Winter 2024).
// Original decimal-minutes format kept intact ("3.45 PM" not "3:45 PM").
// Two minimal changes for portfolio CSP: setTimeout uses a function reference
// (string eval is CSP-blocked), and getTime() is called once on load to start
// the cycle.

//initialize varibles
let time;
let militaryHour;
let stdHour = 0;
let ampm;
let refresh = 1000; //every 1 min

//create time
function getTime() {
  const d =new Date(); //get current date from computer
  militaryHour = d.getHours(); //get hour from date (military format)

  //set AM or PM
  ampm = militaryHour >= 12 ? 'PM' : 'AM';

  //convert current military hor to standard hour
  if (militaryHour > 12) {
    stdHour = militaryHour-12; //to get 1 to 11
  } else if (militaryHour < 1) {
      stdHour = militaryHour+12; //to show 12 if less than 1
  } else {
      stdHour = militaryHour; //when military time is standard time
  }

//get current time
let mins = d.getMinutes();
mins = mins/100; //convert minutes to decimal

//assemble hour and minutes
time = stdHour + mins;

//output time to two decimals on html
document.getElementById("time").innerHTML = time.toFixed(2) + ' ' + ampm;

//run clock function
runTime();
}

//run time continously to create clock
function runTime() {
  time = setTimeout(getTime, refresh);
}

// Kick it off (added for portfolio integration)
getTime();
