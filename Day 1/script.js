//get div
const get_selected_div = (keyCode) => { return document.querySelector(`div[data-key="${keyCode}"]`) }
 
//get audio
const get_selected_audio = (keyCode) => { return document.querySelector(`audio[data-key="${keyCode}"]`) }
 
//add playing to classList
const add_playing_to_class_list = (div_to_add) => { div_to_add.classList.add('playing')}
 
//remove playing from classList
const remove_playing_from_class_list = (div_to_remove_from) => { div_to_remove_from.classList.remove('playing')}
 
 
 
document.addEventListener("keydown", (event) => {
  const get_div = get_selected_div(event.which);
  const get_audio = get_selected_audio(event.which);
  add_playing_to_class_list(get_div);
  get_audio.currentTime = 0;
  get_audio.play();
})
 
document.addEventListener("keyup", (event) => {
  const get_div = get_selected_div(event.which);
  remove_playing_from_class_list(get_div);
})