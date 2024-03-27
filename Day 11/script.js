// Get elements 
const vid_player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progress_bar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const slider = document.querySelectorAll('.player__slider');
const player_btn = document.querySelectorAll('.player__butto// Get elements 
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

function skipping(){
  //when "data-*" is used in the html tag, the dataset will be used to call that particular value, as we 
  //have data-skip = 25 for instance set in the html tag, hence we have this.dataset.skip
  // console.log(this.dataset.skip)
  // console.log('skip');
  // console.log(typeof(this.dataset.skip));
  // this.dataset.skip is a string, hence parseFloat is used
  video.currentTime += parseFloat(this.dataset.skip);
}

//Interactivity - event listeners
video.addEventListener('click',toggle_play);
video.addEventListener('play',button_update); //double check the play and pause 
video.addEventListener('pause',button_update);

toggle.addEventListener('click',toggle_play);

//as player_btn is an array due to querySelectorAll
player_btn.forEach(btn => btn.addEventListener('click',skipping));

n')

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

