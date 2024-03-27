// Get elements 
const vid_player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progress_bar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const slider = document.querySelectorAll('.player__slider');
const player_btn = document.querySelectorAll('.player__button')

// console.log(player_btn);


//functions
function toggle_play(){
  const status = video.paused ? 'play' : 'pause'; //if video.paused() -> video.play else video.pause()
  video[status](); //this is a neat wat of saying video.play() or video.pause()
}

function button_update(){
  // console.log(this);
  const icon = this.paused ? '►' : '❚ ❚'; //video html tag contains paused() function
  // console.log(this);
  // console.log(icon);
  toggle.textContent = icon;
}

//Interactivity - event listeners
video.addEventListener('click',toggle_play);
video.addEventListener('play',button_update); //double check the play and pause 
video.addEventListener('pause',button_update);

toggle.addEventListener('click',toggle_play);

