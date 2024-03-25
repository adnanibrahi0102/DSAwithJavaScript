// Given array
const arr = [1, 2, 3, 4, 5, 6, 7, 78, 8, 9];


// Function to find if a target element exists in the array
function findTheElement(arr, target) {
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is equal to the target, return true
        if (arr[i] === target) {
            return true;
        }
    }
    // If the target is not found, return false
    return false;
}

// Function call to find an element in the array
// console.log(arr.includes(9)) // Using inbuilt method
// console.log(findTheElement(arr, 99))





// Function to find the index of a target element in the array
function findElementIndex(arr, target) {
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is equal to the target, return its index
        if (arr[i] === target) {
            return i;
        }
    }
    // If the target is not found, return -1
    return -1;
}

// Function call to find the index of an element in the array
// console.log(arr.indexOf(9)) // Using inbuilt method
// console.log(findElementIndex(arr, 9))





// Removing elements from the array using splice method
arr.splice(1, 3); // Removes elements starting from index 1, up to 3 elements
// console.log(arr)




// Function to check if two arrays are equal
const isArrayEqual = (arr1, arr2) => {
    // Check if the lengths of the arrays are equal
    if (arr1.length !== arr2.length) {
        return false;
    }
    // Iterate through the arrays and compare elements
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    // If all elements are equal, return true
    return true;
}

// console.log(isArrayEqual([1, 2, 3], [1, 2, 6])); // Test isArrayEqual function




// Sorting an array in ascending and descending order
const x = [1, 4, 6, 0, -9, -5];

x.sort(); // Sorts elements as strings
// console.log(x); 

x.sort((a, b) => b - a); // Sorts in descending order
// console.log(x);

// Filter method to create a new array based on a condition
const filteredArray = arr.filter((element) => element > 10);
// console.log(filteredArray);

// Function to find two indices that sum up to a target value
const twoSum = (arr, target) => {
    const map = new Map(); // Creating a hash map to store elements and their indices
    
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i]; // Calculate complement
        // If complement exists in the map, return its index along with current index
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i); // Otherwise, add current element and its index to the map
    }
    // If no pair is found, return an empty array
    return [];
}

// Test twoSum function
console.log(twoSum([2, 7, 11, 15], 9));
