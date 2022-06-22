
//Using forEach log out each of my friends but with their name all lower-cased. Use the <str>.toLowerCase() method.
console.log("----------------Q1-------------------")
const friends = ["Melissa", "Marc", "Andrew", "Nick"];
friends.forEach(function(frind){
    nameFrind = frind.toLowerCase()
    console.log(`I have a friend named ${nameFrind}`)
})


//Create an array that has the numbers of the array numbers squared with map
console.log("----------------Q2-----------------------")
const numbers = [1, 5, 8]
const numbersMap = numbers.map(function(num){
    return num ** 2
})
console.log(numbersMap)
console.log("----------------Q3-----------------------")
//Use map to create a new array that adds the string " is awesome" to each element in the array.
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const instructorsMap = instructors.map(function(element){
    return element + " is awesome " 
}
)
console.log(instructorsMap)

console.log("-----------------Q4-------------------------")
//Given the array nums try to count the number of even numbers using reduce() and put it in the variable evenNumbers:
const nums = [25, 6, 8, 3];
let sum =0
const sumEven = nums.reduce(function(a,p){
    if (a || p % 2 == 0){
        sum +=1
    }
})
console.log("the sum :" + sum)

console.log("-------------------Q5------------------------")
//Filter out all "jerks"!
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const peopleFilter = people.filter(function(elment){
    return elment.startsWith("jerks");
})
console.log(peopleFilter)

console.log("------------------Q6-------------------------")
//Create a function to get the average of a group of numbers avg([8, 2, 2, 4]) // should return 4
const number=[8, 2, 2, 4]
len=number.length
const avg=number.reduce((acc,num) => (acc+num))/number.length
console.log(`the avrage number of [${number}] is : [${avg}]\n----------`)

console.log("-------------------Q7-------------------------")
str =["caterpillar",]
const reverse = str.map(word => word.split("").reverse().join(""));
console.log(`reverse the ${str} is : ${reverse} \n----------`)


console.log("-------------------Q8-------------------------")
let Movie = { 
  title: "Puff the Magic Dragon lasts", 
  duration: 30, 
  stars: ["Puff", "Jackie", "Living Sneezes"],
  introduce : function(){
      console.log(`\n${this.title} lasted for ${this.duration} minutes. \nStars: ${this.stars}`)
  }
};
Movie.introduce()