const get_canvas = document.querySelector('#draw');
// context is what we use to draw on a canva
const get_context = get_canvas.getContext('2d');


// setting canvas' size to the window's
get_canvas.width = window.innerWidth;
get_canvas.height = window.innerHeight;

get_context.strokeStyle = 'red';
get_context.lineJoin = 'round';
get_context.lineCap = 'round';
get_context.lineWidth = 50;

let is_drawing = false; //flag for drawing based on mouse interaction

let lastX ;//X,Y cordinates to know where you finish drawing
let lastY ;

function drawing(e){
    // console.log(e);
    if(!is_drawing) return;
    // console.log(e);
    get_context.beginPath();
    get_context.moveTo(lastX,lastY);//our starting position
    get_context.lineTo(e.offsetX,e.offsetY); //e.offset... is from the event that is given to us when the interactions happen
    get_context.stroke(); //this will begin teh drawing in the canvas
    [lastX, lastY] = [e.offsetX,e.offsetY];
}

get_canvas.addEventListener('mousemove',drawing); //this gets whenever the mouse is moving on the canvas
get_canvas.addEventListener('mousedown',(e) => {
    is_drawing = true
    [lastX, lastY] = [e.offsetX,e.offsetY]; //update lastX amd lastY instead of starting from 0 when mouse is down
}); 
get_canvas.addEventListener('mouseup',() => is_drawing = false); 
get_canvas.addEventListener('mouseout',() => is_drawing = false); 
