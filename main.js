/******************
 * YOUR CODE HERE *
******************/
function doubleAll(num) {
  const newDouble = []
  for (let i = 0; i < num.length; i++) {
    newDouble.push(num[i] * 2)
  }
  return newDouble
}
function yelledGreetings(name) {
  const yelling = [];
  for (let i = 0; i < name.length; i++) {
    yelling.push(name[i] + '!')
  }
  return yelling
}
function absoluteValues(num) {
  const newNumber = []; // Creating new array to push items into
  for (let i = 0; i < num.length; i++) { // Loops through length of array specified

    bestNumber = Math.abs(num[i])
    newNumber.push(bestNumber);
  }
  return (newNumber)
}
function upperCaseFirstLetters(name) {
  const buddyGuy = [];
  for (let i = 0; i < name.length; i++) {

    notYourBuddyGuy = name[i].charAt(0).toUpperCase();
    notYourFriendGuy = name[i].slice(1).toLowerCase()
    buddyGuy.push(notYourBuddyGuy + notYourFriendGuy)
  }
  return buddyGuy
}
function changeToInitials(userArray) {
  const newArray = [];
  for (let i = 0; i < userArray.length; i++) {
    notTheNewArray = userArray[i].slice(0, 1)
    spaceCounter = userArray[i].indexOf(' ')
    alsoNotTheNewArray = userArray[i].slice((spaceCounter + 1), (spaceCounter + 2))
    newArray.push(notTheNewArray + alsoNotTheNewArray)
  }
  return newArray
}
function doubleOdd(array) {
  const array2 = [];
  for (let i = 0; i < array.length; i++) {
    
    if (array[i] * 10 % 10 !== 0) {
      array2.push(array[i])
    
    } else if (array[i] % 2 === 0) {
      array2.push(array[i]);

    } else if (array[i] % 2 !== 0) {
      array2.push(array[i] * 2)
    }
  }
  return (array2)
}
function add1ToLeft(crazyGlue) {
const notThatSticky = []
  for (let i = 0; i < crazyGlue.length; i++)
if (crazyGlue[i] < 0) {
    notThatSticky.push (-1 * ('1' + crazyGlue[i] * - 1))
  
  } else if (crazyGlue[i] >= 0) { 
    notThatSticky.push (1 * ('1' + crazyGlue[i]))
  }
return (notThatSticky) 
}
// function add1ToLeft(crazyGlue) {
//   const notThatSticky = []
//     for (let i = 0; i < crazyGlue.length; i++)
//   if (crazyGlue[i] < 0) {
//       notThatSticky.push((-1 *('1' + crazyGlue[i] * - 1)))
    
//     } else if (crazyGlue[i] >= 0) { 
//       notThatSticky.push(Math.abs('1' + crazyGlue[i]))
//     }
//   return (notThatSticky) 


// return superGlue






/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
