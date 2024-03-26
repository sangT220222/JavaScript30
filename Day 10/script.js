const check_boxes = document.querySelectorAll('.inbox input[type = "checkbox"]')

// console.log(check_boxes);

// flag to see if checkbox has been ticked
let last_checked;

function check_handle(e) {
  let in_between = false; //flag to check if there are checkboxes that aren't ticked between two check boxes
  if(e.shiftKey && this.checked){ //this.checked is specifically for input type checkbox!!!
    //once shift key is pressed, and 
    //loop through the checkboxes
    check_boxes.forEach(box => {
      // console.log(box); //uncomment this to inspect behaviour of the loop and check if check box is ticked
      if(box === this || box === last_checked){
        // console.log("checking in between the checked boxes"); //uncomment this to inspect behaviour of the loop and check if check box is ticked
        in_between = !in_between;
      }

      if (in_between){
        box.checked = true; //check all the boxes in between all the checked boxes we have initially!
      }
    })
  }


  last_checked = this;
}

check_boxes.forEach(box => box.addEventListener('click',check_handle));

// document.body.addEventListener('keydown', (e) => {
//   if(e.shiftKey) {
//     // console.log("Shift pressed");

//   }
// })