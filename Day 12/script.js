import {cornify_add} from './cornify.js'

let user_input = [];
const keyword = 'bingo';

window.addEventListener('keyup', (e) =>{
  // console.log(e.key);//tells us what key is pressed
  user_input.push(e.key)
  //splice(index to add or remove, number of elements to remove)
  user_input.splice(-keyword.length - 1, user_input.length - keyword.length);
  //join("") joins the element in array and turns it to string
  if (user_input.join("").includes(keyword)){
    console.log("Bingo!");
  } 
  // console.log(user_input);
})

