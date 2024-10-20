@@ -1,26 +1,26 @@
// concat()
arr1 = ["kwyn", "chelsea"];
arr2 = ["pau", "margo", "yuan"];
let totalArr = arr1.concat(arr2);
console.log(totalArr.join(", "));
// push()
fruits = ["mango", "watermelon ", "strawberry", "orange"];
fruits.push("apple");
console.log(fruits);
// unshift()
array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);
// pop()
fruits = ["mango", "watermelon", "strawberry", "orange"];
fruits.pop();
console.log(fruits);

// shift()
array2 = [1, 2, 3]
array2 = [1, 2, 3];
array2.shift();
console.log(array2);

@@ -36,6 +36,6 @@ console.log(slicedFruits);


// splice
let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthsArray.splice(0, 2);
console.log(monthsArray)
console.log(monthsArray);
