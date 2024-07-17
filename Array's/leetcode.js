/* The code snippet is a JavaScript function named `singleNumber` that takes an array of numbers as
input and returns a single number. It uses the bitwise XOR operator (`^`) to find the number that
appears only once in the input array, while all other numbers appear twice. The function iterates
through the array and performs XOR operation on each number with the current result. This operation
effectively cancels out duplicate numbers, leaving only the single number in the end. */
// 136. Single Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for(let num of nums){
      result = result ^ num;
    }
    return result
 };