//get real time, and update the clock hands accordingly
const get_date = () => {
  const now =new Date()
  return now
}

const get_hour = (date) => { return date.getHours() }
const get_minutes = (date) => { return date.getMinutes() }
const get_seconds = (date) => { return date.getSeconds() }


const current_date = get_date();
const current_hour = get_hour(current_date);
const current_minutes = get_minutes(current_date);
const current_seconds = get_seconds(current_date);

console.log(current_hour);
console.log(current_minutes);
console.log(current_seconds);