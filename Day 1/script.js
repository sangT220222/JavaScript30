const letter_a = (keyCode) => { return document.querySelector(`div[data-key="${keyCode}"].key`) }
 
//add playing to classList
const add_playing_to_class_list = (div_to_add) => { div_to_add.classList.add('playing')}
 
//remove playing from classList
const remove_playing_from_class_list = (div_to_remove_from) => { div_to_remove_from.classList.remove('playing')}
 
//get audio
 
// document.addEventListener("keydown", (event) => {
//   if (event.key === "a"){
//     //want to add class name of "playing"
//     letter_a().classList.add('playing');
//   }
//   else if (event.key === "s"){
//     letter_s().classList.add('playing');
//   }
//   else if (event.key === "d"){
//     letter_d().classList.add('playing');
//   }
//   else if (event.key === "f"){
//     letter_f().classList.add('playing');
//   }
//   else if (event.key === "g"){
//     letter_g().classList.add('playing');
//   }
//   else if (event.key === "h"){
//     letter_h().classList.add('playing');
//   }
//   else if (event.key === "j"){
//     letter_j().classList.add('playing');
//   }
//   else if (event.key === "k"){
//     letter_k().classList.add('playing');
//   }
//   else if (event.key === "l"){
//     letter_l().classList.add('playing');
//   }
// })
 
 
// document.addEventListener("keyup", (event) => {
//   if(event.key === "a"){
//     //remove class name of "playing"
//     letter_a().classList.remove('playing');
//   }
//   else if (event.key === "s"){
//     letter_s().classList.remove('playing');
//   }
//   else if (event.key === "d"){
//     letter_d().classList.remove('playing');
//   }
//   else if (event.key === "f"){
//     letter_f().classList.remove('playing');
//   }
//   else if (event.key === "g"){
//     letter_g().classList.remove('playing');
//   }
//   else if (event.key === "h"){
//     letter_h().classList.remove('playing');
//   }
//   else if (event.key === "j"){
//     letter_j().classList.remove('playing');
//   }
//   else if (event.key === "k"){
//     letter_k().classList.remove('playing');
//   }
//   else if (event.key === "l"){
//     letter_l().classList.remove('playing');
//   }
// })
 
 
document.addEventListener("keydown", (event) => {
  const get_div = letter_a(event.which);
  add_playing_to_class_list(get_div);
})
 
document.addEventListener("keyup", (event) => {
  const get_div = letter_a(event.which);
  remove_playing_from_class_list(get_div);
})