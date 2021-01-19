//List all numbers between 1 - 1000.
//Instead of printing the numbers that are evenly divisible by 3, print "fizz".
//Instead of printing the numbers that are evenly divisible by 5, print "buzz".
//If the number is evenly divisible by both 3 and 5, print "fizzBuzz".

let numbers = [1,2,3,4,5,1000]

for (let index = 0; index <1001; index++){
  
  if (index % 3 === 0 && index % 5 === 0){
    console.log('fizzBuzz')
  } else if (index % 3 === 0) {
    console.log("fizz")
  } else if (index % 5 ===0) {
    console.log ("buzz")
  } else {console.log ("nope")}
  
  //if number is % by 3, print fizz
  //if number is % by 5, print buzz
  //if number is % by 3 and 5, print fizzbuzz

}