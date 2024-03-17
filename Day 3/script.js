const inputs = document.querySelectorAll('.controls input');
//querySelector gives you an array, where ofc we can use the array methods to loop etc


function handle_update(){
    console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change',handle_update))
