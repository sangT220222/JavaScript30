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

function skipping(){
  //when "data-*" is used in the html tag, the dataset will be used to call that particular value, as we 
  //have data-skip = 25 for instance set in the html tag, hence we have this.dataset.skip
  // console.log(this.dataset.skip)
  // console.log('skip');
  // console.log(typeof(this.dataset.skip));
  // this.dataset.skip is a string, hence parseFloat is used
  video.currentTime += parseFloat(this.dataset.skip)
}

function play_slider(){
  video[this.name] = this.value; //updating the value of the respective play_slider tags
}

function video_progress(){
  //update in % as we will be changing the flex-basis property in .progress__filled 
  //0% = start, 100% = finish
  const percent = (video.currentTime/video.duration)*100;
  // console.log(percent);
  progress_bar.style.flexBasis = `${percent}%`;}


function scrub_progress_bar(e){
  // console.log(e) //we want to use e.offsetX as this tells where the position it was clicked on
  // calculates the time position within a video corresponding to a mouse click event on a progress bar
  const update_time = parseFloat(e.offsetX/progress.offsetWidth * video.duration);
  video.currentTime = update_time;
  console.log(update_time);
}

//Interactivity - event listeners
video.addEventListener('click',toggle_play);
video.addEventListener('play',button_update); //double check the play and pause 
video.addEventListener('pause',button_update);
video.addEventListener('timeupdate',video_progress); //this time update will continuously monitor the progress of the video playback and update the progress bar accordingly.

toggle.addEventListener('click',toggle_play);

//as player_btn is an array due to querySelectorAll
player_btn.forEach(btn => btn.addEventListener('click',skipping));

slider.forEach(range => range.addEventListener('click',play_slider));


let mousedown = false;
progress.addEventListener('click',video_progress);
progress.addEventListener('click',scrub_progress_bar);

//line 75, the mousedown has to be true and the scrup_progress_bar with the relative event will be called
progress.addEventListener('mousemove', (e) => mousedown && scrub_progress_bar(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
