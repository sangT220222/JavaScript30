//getting HTML tags
const get_seconds_div = document.querySelector('.clock .second-hand');

//get real time, and update the clock hands accordingly
const get_date = () => {
  const now =new Date()
  return now
}

const get_hour = (date) => { return date.getHours() }
const get_minutes = (date) => { return date.getMinutes() }
const get_seconds = (date) => { return date.getSeconds() }

//convert seconds to degrees so that it relects on the clock
const convert_seconds_to_degress = (seconds) => {
  //There are 360 degrees in a circle.
  //each second = 360/60 of a circle => 6 degrees
  return seconds * (360/60)
}

const current_date = get_date();

const current_hour = get_hour(current_date);
const current_minutes = get_minutes(current_date);
const current_seconds = get_seconds(current_date);

const seconds_in_degrees = convert_seconds_to_degress(current_seconds);

//stlying - for moving the hands on the clock
const move_seconds_hand = (seconds_div,degrees) => {
  seconds_div.style.transform = `rotate(${degrees}deg)`;
}

console.log(get_seconds_div);
move_seconds_hand(get_seconds_div,seconds_in_degrees);

