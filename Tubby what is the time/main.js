//Step 1: This code will get the date, year and months using get methods e.g 18th, 15th and the day e.g Monday, Friday 
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDay();

//Step 2: Create an array for the getday() method
let listofDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//Step 3: Create an array and function for the getMonth method
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "August", "November", "December" ]


console.log(`Today is: ${listofDay[day]}, ${months[month]} ${year}`);

//Step 3: Get time using various methods

let time = today.toLocaleTimeString();
console.log(`The time is ${time}`);