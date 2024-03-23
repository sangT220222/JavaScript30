const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Testing");

// Interpolated
console.log(`Hello this is for practice ${'😃😃😃'}`);
console.log("Another way of doing this %s - lmao", '😎');

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

// warning!
console.warn("Warning testing");

// Error :|
console.error("WOOPSIE");

// Info
console.info("INFORMATION");

// Testing
console.assert(1===2, "Not equal - only shows when it is wrong not true");

// clearing
console.clear();

// Viewing DOM Elements
const para = document.querySelector('p');
console.log(para);
console.dir(para); //gives all the properties of the DOM element
console.clear();

// Grouping together
dogs.forEach(dog => {
    // console.log(dog.name);
    // console.log(dog.age);
    console.groupCollapsed(`${dog.name}`);
    console.groupEnd(`${dog.name}`); //this groupEnd is needed when groupCollapsed is called
})
// counting

console.count("Wes");

// timing
console.time('fetching stuff');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json)
    .then(data => {
        console.timeEnd('fetching stuff');
        console.log(data);
    })

//table
console.table(dogs); //can take array/objects and display them into a table!
