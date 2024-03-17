const inputs = document.querySelectorAll('.controls input');
//querySelector gives you an array, where ofc we can use the array methods to loop etc
const image = document.querySelector('img')

function handle_update(){
    const unit = this.getAttribute('unit') || '';
    // console.log(this.value)
    // console.log(unit);
    document.documentElement.style.setProperty(`--${this.name}`,this.value + unit)
}

//this will be when we change the range of blur and spacing of the image
inputs.forEach(input => input.addEventListener('change',handle_update))

