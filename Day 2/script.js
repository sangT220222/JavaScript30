//getting HTML tags
const get_seconds_div = () => document.querySelector('.clock .second-hand');
const get_minutes_div = () => document.querySelector('.clock .min-hand');


//get real time and date
const get_date = () => {
  const now =new Date()
  return now
}

const get_hour = (date) => date.getHours() 
const get_minutes = (date) => date.getMinutes();
const get_seconds = (date) => date.getSeconds() ;

//convert seconds to degrees so that it relects on the clock
const convert_time_to_degrees = (time, max) => (time % max) * (360 / max);

//stlying - for moving the hands on the clock
const move_seconds_or_minutes_hand = (div,degrees) => div.style.transform = `rotate(${degrees}deg)`;

// const move_minutess_hand = (minutes_div,degrees) => {
//   minutes_div.style.transform = `rotate(${degrees}deg)`;
// }

const update_clock = () => {
  //getting time and date
  const current_date = get_date();
  const current_hour = get_hour(current_date);
  const current_minutes = get_minutes(current_date);
  const current_seconds = get_seconds(current_date);

  //getting html tags
  const seconds_div = get_seconds_div();
  const minutes_div = get_minutes_div();
  
  const seconds_in_degrees = convert_time_to_degrees(current_seconds,60);
  const minutes_in_degrees = convert_time_to_degrees(current_minutes,60);

  move_seconds_or_minutes_hand(seconds_div,seconds_in_degrees);
  move_seconds_or_minutes_hand(minutes_div,minutes_in_degrees);

  //setTimeout() to call the updateClock function after a delay of 1000 milliseconds.
  //prevents max call stack size exceed error
  //update_clock won't be called immediately, but update_clock() will
  // console.log(current_minutes);
  // console.log(minutes_in_degrees);
  setTimeout(update_clock, 1000);
}

update_clock();
