//grabbing the panels
const panels = document.querySelectorAll('.panel');

function toggle_open () {
    this.classList.toggle('open');
}

function toggle_transition () {
    this.classList.toggle('transition_in');
}

panels.forEach(panel => panel.addEventListener('click',toggle_open)); //toggle_open() will be called when page loads
panels.forEach(panel => panel.addEventListener('click',toggle_transition));