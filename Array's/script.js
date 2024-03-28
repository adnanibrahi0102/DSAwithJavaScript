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
};

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
};

// Test twoSum function
// console.log(twoSum([2, 7, 11, 15], 9));




// Given an array of integers, find the sum of all elements.
function sumOfArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    //  sum= sum+arr[i]
  }
  return sum;
}
const array = [1, 2, 3, 2]
// console.log(sumOfArrayElements(array))




// Given an array of integers, find the product of all elements.
function productOfArrayElements(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
// console.log(productOfArrayElements(array))



//Find the maximum  element in an array.
const findMax = (arr) => {
  let Max = Number.MIN_VALUE;
  arr.forEach(element => {
    if (element > Max) {
      Max = element;
    }
  });
  return Max;
}
// console.log(findMax(array))



//Find the  minimum element in an array.
const findMin = (arr) => {
  let Min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (Min > arr[i]) {
      Min = arr[i];
    }
  }
  return Min;
}
// console.log(findMin(array))



//Calculate the average of all elements in an array
const averageOfAllElements = (arr) => {
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let average = sum / arr.length
  return average;

}
// console.log(averageOfAllElements(array));



//Reverse the elements of an array.
function reverseArray(arr) {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}
//  console.log(reverseArray(array))


// Remove duplicates from an array and return a new array with only unique elements.
const remove_duplicates_from_array = (arr) => {
  const unique_Array = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique_Array.includes(arr[i])) {
      unique_Array.push(arr[i]);
    }

  }
  return unique_Array;
}
const arr1 = [1, 1, 2, 2, 4, 2, 5, 2, 4, 6, 7, 8, 10];
// console.log(remove_duplicates_from_array(arr1))



// Rotate the elements of an array to the left or right by a given number of steps.
const rotationOfArray=(arr,steps)=>{
  const rotations = steps % arr.length;
  const rotatedArray=arr.slice(rotations).concat(arr.slice(0,rotations));
  return rotatedArray;
}

const array1=[1,2,3,45,2,6,7];
// console.log(rotationOfArray(array1,3))

//Sort the elements of an array in ascending or descending order.

const sortArray=(arr)=>{
 const sorted= arr.sort((a,b)=>a-b);
 return sorted;
}
// console.log(sortArray([1,2,4,51,23]));

const bubbleSort=(arr)=>{
  for(let i =0 ;i<arr.length-1;i++){
    for(let j=0 ;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        //swapping
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([2,4,1,0,5,3]))