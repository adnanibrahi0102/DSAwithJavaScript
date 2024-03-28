const bubbleSort = (array) => {
    // Outer loop iterates through each element of the array and runs n-1 times
    for (let i = 0; i < array.length - 1; i++) {
        // Inner loop iterates through each pair of adjacent elements
        // It runs array.length - i - 1 times because after each iteration of the outer loop,
        // the largest i elements are already sorted and don't need to be compared again.
        let swapped = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            // Compare adjacent elements
            if (array[j] > array[j + 1]) {
                swapped = true;
                // Swap the elements if they are in the wrong order
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        // If no swaps occurred in this pass, the array is already sorted, so break out of the outer loop
        if (!swapped) {
            break;
        }
    }
    // Return the sorted array
    return array;
}

// Example usage
console.log(bubbleSort([1, 3, 5, 7, 1, 2, 67, 23]));
// Time Complexity of Bubble sort is o(n*2)
