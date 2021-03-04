// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

//create a function that takes in an array
// const colorFilterShuffle = (array) => {
// //shuffle all the items in the array
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];}
//     //filter the original array, take in the value and the index
//     return array.filter((value, index) => { 
//     // in order to return the array with the first item removed
//     return index > 0
//     })
// }

// console.log(colorFilterShuffle(collections))

//I was able to get the output to return the original array, shuffled, and without the first value, but I wasn't sure how to make this loop continuously so it always removes the first value until the array is empty.
//I thought about putting it into a for loop so it would iterate through the length of the array and remove a value each time but it didn't seem to work.
//I think the answer might be to push the values into a new array? But then Im not sure how to make it so the function takes in the new version of the array each time.

//create a function that takes in an array
const colorFilterShuffle2 = (array) => {
    let newArr = []
    for(let i=0; i<array.length; i++){
        if(array != null){
    //shuffle all the items in the array
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];}
        //filter the original array, take in the value and the index
        return array.filter((value, index) => { 
        // in order to return the array with the first item removed
        return index > 0
        })
    }
        else {
            return "The array is empty"
        }
}
}

console.log(colorFilterShuffle2(collections))


const shuffles = (array) => {
    if(array.length <= 1){
        return "The array is empty"
    } else {
        //removes the first element from an array and returns it
        array.shift()
        for (let i=0; i<array.length; i++){
            let randomIndex = Math.floor(Math.random() * array.length)
            let temp = array[randomIndex]
        array[randomIndex] = array [i]

        }
    }
}







// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

//write a function that takes in an array
const cubeAndSum = (array) =>  {
    //start with a constant at 0 to add to
    var sum = 0
    //I found this syntax online, but I'm not totally sure how it works because I havent seen it before- it looks like a way to write a for loop but a bit different?
    for(var i in array){
        //keep adding the number at each index, cubed, to the sum 
        sum += Math.pow(array[i], 3)
    }
    //return the new sum
    return sum
}

console.log(cubeAndSum(cubeAndSum1))
console.log(cubeAndSum(cubeAndSum2))

//another way I found to add all the numbers in an array that is a single line of code
// const arrSum = arr => arr.reduce((a,b) => a + b, 0)





// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

const minMax = (array) => {
    //set a variable array that will hold the minimum and maximum values of the old array
    let minMaxArray = []
    // sort the OG array in ascending order
    array.sort(function(a, b){return a-b})
    //push the minimum and maximum values to the new array
    minMaxArray.push(array[0], array[array.length - 1])
    //return the new array
    return minMaxArray
}

console.log(minMax(nums1))
console.log(minMax(nums2))





// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

//declare a function that takes a string as an argument
const everyOther = (string) => {
    //it splits the string into an array of small one character strings
    let splitString = string.split('')
    //maps over the array, the map takes in both value and index
    let uppercasedOddIndexes = splitString.map((value, index) => {
        //if the index is odd then return the uppercased value
        if (index % 2 !== 0){
            return value.toUpperCase()
        } else {
            //if the index is not odd then just return the value as is
            return value
        }
    })
    //the full function should return the array of uppercased odd indexes joined together into a single string
    return uppercasedOddIndexes.join("")
}

console.log(everyOther(testString1))
console.log(everyOther(testString2))





// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
var arr3 = [12, 16, 21, 13, 1, 51, 41]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

//write a function that can accept a dynamic # of arguments using the spread operator
const noDuplicates = (array1, ...array2) => {
    //set a variable to push the values for the new array without duplicates
    var noDuplicateArray = []
    //combine array 2/any other arrays in argument with array 1
    let combinedArray = array1.concat(...array2)
    //for every value in the ine new combined array
    for(var value of combinedArray){
        //this is a part I looked up- I'm not sure exactly how it works but I think that you are basically checking if the value already exists inside noDuplicateArray by testing if the index is at -1?, and if it doesn't then you are pushing it into the new array
        //if you ask for the index of something that DOESNT EXIST IN THE ARRAY, it returns a negative one. 
        if(noDuplicateArray.indexOf(value) === -1){
            noDuplicateArray.push(value);
        }
    }
    return noDuplicateArray;
}

//REFACTORED VERSION
const removeDupes = (array1, ...array2) => {
    let emptyArray = []
    let mergedArray = array1.concat(...array2)
    mergedArray.map(value=> {
        if (emptyArray.indexOf(value) === -1){
            emptyArray.push(value)
        }
    })
    return emptyArray
}

//OTHER REFACTORED VERSION
function removeDuplicates(array) {
    return array.filter((value, index) => array.indexOf(value) === index)
  }

// console.log(noDuplicates(arr1, arr2, arr3))

console.log(removeDupes(arr1, arr2, arr3))
console.log(removeDuplicates(arr1))