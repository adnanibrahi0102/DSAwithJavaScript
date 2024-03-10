const arr=[1,2,3,4,5,6,7,78,8,9];

function findTheElement(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true;
        }
    }
    return false;
}
// console.log(arr.includes(9)) // inbuilt method
// console.log(findTheElement(arr,99))


function findElementIndex(arr,target){
    for(let i=0;i<arr.length;i++){
          if(arr[i]===target){
            return i;
          }
    }
    return -1;
}
// console.log(arr.indexOf(9)) //inbuilt method
// console.log(findElementIndex(arr,9)) 

arr.splice(1,3)
// console.log(arr)


// Question 3: How can you check if two arrays are equal?

const isArrayEqual=(arr1,arr2)=>{
    if(arr1.length!==arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }
    }
    return true;
}

// console.log(isArrayEqual([1,2,3],[1,2,6]));

// Question 4: How to sort an array in ascending and descending order?

const x = [1, 4, 6, 0, -9, -5];
x.sort(); // O(NlogN)
// console.log(x); 
// when using the sort() method on arrays in JavaScript without specifying a custom comparison function, it sorts elements as strings rather than numbers. This results in the behavior you observed where -9 comes after -5, since - has a lower character code than 5.

x.sort((a, b) => b - a);
// x.sort((a,b)=>a-b)
// console.log(x);

// filter methos
const filteredArray=arr.filter((element)=>element>10);
// console.log(filteredArray)


//TWO SUM

const twoSum=(arr,target)=>{
    const map=new Map(); //Creating a hash map to store the elements and their indices
    
    for(let i=0;i<arr.length;i++){
        const complement=target-arr[i];
        if(map.has(complement)){
            return [map.get(complement),i];
        }
        map.set(arr[i],i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));