//getting HTML tags
const get_seconds_div = () => document.querySelector('.clock .second-hand');
const get_minutes_div = () => document.querySelector('.clock .min-hand');
const get_hours_div = () => document.querySelector('.clock .hour-hand');


//get real time and date
const get_date = () => {
  const now =new Date()
  return now
}

const get_hour = (date) => date.getHours() 
const get_minutes = (date) => date.getMinutes();
const get_seconds = (date) => date.getSeconds() ;

//convert seconds to degrees so that it relects on the clock
const convert_seconds_to_degrees = (seconds) => (seconds) * (360 / 60);
const convert_minutes_to_degrees = (minutes,seconds) => ((minutes * 360/60) + (seconds/60)* 6) + 90;
// ((hour / 12) * 360) + ((mins/60)*30) + 90;
const convert_hours_to_degrees = (hours,minutes) => (((hours /12) * 360) + ((minutes/60)* 30)) + 90;
 
//stlying - for moving the hands on the clock
const move_hand = (div,degrees) => div.style.transform = `rotate(${degrees}deg)`;

// const move_minutess_hand = (minutes_div,degrees) => {
//   minutes_div.style.transform = `rotate(${degrees}deg)`;
// }

const update_clock = () => {
  //getting time and date
  const current_date = get_date();
  const current_hours = get_hour(current_date);
  const current_minutes = get_minutes(current_date);
  const current_seconds = get_seconds(current_date);

  //getting html tags
  const seconds_div = get_seconds_div();
  const minutes_div = get_minutes_div();
  const hours_div = get_hours_div();
  
  const seconds_in_degrees = convert_seconds_to_degrees(current_seconds);
  const minutes_in_degrees = convert_minutes_to_degrees(current_minutes,current_seconds);
  const hours_in_degrees = convert_hours_to_degrees(current_hours,current_minutes);

  move_hand(seconds_div,seconds_in_degrees);
  move_hand(minutes_div,minutes_in_degrees);
  move_hand(hours_div,hours_in_degrees);

  //prevents max call stack size exceed error
  //update_clock won't be called immediately, but update_clock() will
  setTimeout(update_clock, 1000);
}

update_clock();
