    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      const born_in_1500s = inventors.filter(inventor => inventor.year < 1600);
    //   console.log(born_in_1500s);
  
      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
      const first_last = inventors.map(inventor => inventor.first + " " + inventor.last);
    //   console.log(first_last)
  
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      const sorted_dob = inventors.sort((inventor1 , inventor2) => inventor1.year - inventor2.year);
    //   console.log(sorted_dob);
  
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
      const sum_of_years = inventors.reduce((increment, current_value) => {
        return increment + (current_value.passed - current_value.year); 
        },0);

    //   console.log(sum_of_years);

      // 5. Sort the inventors by years lived
      const years_lived = inventors.sort((inventor1 , inventor2) => (inventor2.passed - inventor2.year) - (inventor1.passed - inventor1.year));
    //   years_lived.forEach(inventor => {
    //     console.log(inventor.first);
    //     console.log(inventor.passed - inventor.year);
    //   })

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    //   first, we select the div that has the Boulevards in Paris
    //   const get_category = document.querySelector('.mw-category');
    //   //next we are getting the links list within it
    // //   console.log(get_category);
    // //spread operator puts item in the node list into an array
    //   const links = [...get_category.querySelectorAll('a')];
    // //   console.log(links);
    //   const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const people_sorted = people.sort((first_name, second_name)=>{
        const person1_last = first_name.split(', ')[1];
        const person2_last = second_name.split(', ')[1];
        return person1_last > person2_last ? 1 : -1;
      })
    //   console.log(people_sorted);
  
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      const sum_data = data.reduce((obj,item) => {
        if(!obj[item]) { //checks if item that is in data is in obj, if not add it to the obj
            obj[item] = 0; //initialise the item count in obj to 0
        }
        obj[item]++; //increment it no matter what
        return obj;
      },{});

    //   console.log(sum_data)