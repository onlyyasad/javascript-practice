// Array Declare ------------------------------------------------

var friendsName = ['Rahim', 'Karim', 'Abul', 'Hashem'];
var friendsAge = [25, 27, 30, 39]

// Array Output -------------------------------------------------
console.log(friendsName)
console.log(friendsAge)

// How many elements on the Array --------------------------------
console.log(friendsName.length)
console.log(friendsAge.length)

// Find index number of an Array Element -------------------------
var findElement = friendsName.indexOf('Karim');
console.log(findElement)

console.log(friendsName.indexOf('Abul'))

// Find Array element by index number ----------------------------
console.log(friendsAge[3])
console.log(friendsName[0])
console.log(friendsAge[2])

// Push a new element at the end of an Array ---------------------

friendsName.push('Jashim');
console.log(friendsName)

// Reverse Push/ Push a new element at the beginning of an Array--

friendsName.unshift('Alam');
console.log(friendsName)

// Pop/remove the last element of an Array -----------------------

console.log(friendsName.pop())
console.log(friendsName)

friendsName.shift();
console.log(friendsName)