// 1. How to find if a target element exists in an array using a custom function?
/**
 * This function checks if a target element exists in a given array.
 *
 * @param {Array} array - The array to search in.
 * @param {*} target - The element to find in the array.
 * @returns {boolean} Returns true if the target element is found in the array, otherwise false.
 *
 * @example
 * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
 * console.log(findTargetElement(array, 12)); // Output: true
 * console.log(findTargetElement(array, 15)); // Output: false
 */
function findTargetElement(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true;
        }
    }
    return false;
}

// 2. How to find the index of a target element in an array using a custom function?

/**
 * This function finds the index of a target element in a given array.
 * If the target element is not found, it returns -1.
 *
 * @param {Array} array - The array to search in.
 * @param {*} target - The element to find in the array.
 *
 * @returns {number} The index of the target element in the array, or -1 if not found.
 *
 * @example
 * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
 * console.log(findIndexOfTargetElement(array, 12)); // Output: 11
 * console.log(findIndexOfTargetElement(array, 15)); // Output: -1
 */
function findIndexOfTargetElement(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}


/**
 * This function removes elements from an array using the `splice` method.
 *
 * @param {Array} array - The array from which to remove elements.
 * @param {number} start - The index at which to start removing elements.
 * @param {number} deleteCount - The number of elements to remove.
 * @param {...*} [items] - Any additional items to add to the array at the specified index.
 *
 * @returns {Array} An array containing the removed elements.
 *
 * @example
 * const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
 * const splicedArray = spliceElements(array, 2, 5);
 * console.log(array); // Output: [1, 2, 8, 9, 10, 11, 12, 13, 14]
 * console.log(splicedArray); // Output: [3, 4, 5, 6, 7]
 */
function spliceElements(array, start, deleteCount, ...items) {
    return array.splice(start, deleteCount, ...items);
}


/**
 * Checks if two arrays are equal by comparing their elements.
 *
 * @param {Array} array1 - The first array to compare.
 * @param {Array} array2 - The second array to compare.
 *
 * @returns {boolean} Returns true if the arrays are equal (i.e., have the same length and elements in the same order), otherwise false.
 *
 * @example
 * const array1 = [1, 2, 3, 4];
 * const array2 = [1, 2, 3, 4];
 * console.log(isArrayEqual(array1, array2)); // Output: true
 *
 * const array3 = [1, 2, 3, 4];
 * const array4 = [1, 2, 3, 5];
 * console.log(isArrayEqual(array3, array4)); // Output: false
 */
function isArrayEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

// 5. How to sort an array in ascending order using the `sort` method?

const array = [1,4,27,5,9,6,10];
array.sort((a , b)=>a - b)
console.log(array)