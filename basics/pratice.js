//check palindrome number

const isPalindrome = (num) => {
  const originalNumber = num;
  let reversedNumber=0;
  while (num > 0) {
    const digit = num % 10;
    reversedNumber = reversedNumber * 10 + digit;
    num = Math.floor(num / 10);
  }
  return originalNumber===reversedNumber;
};
// console.log(isPalindrome(123))

function isPalindrome1(num){
    return num<0 ? false : num === parseInt(num.toString().split("").reverse().join(""))
}

// console.log(isPalindrome1(1231))

// 0 1 1 2 3 5 8 13

function fibb(n){
    if (n<2){
        return n;
    }
    let prev=0;
    let current =1;
    let next;
    for(let i=2 ; i<=n;i++){
        next =prev + current;
        prev=current;
        current=next;
       
    }
    return next;

    

    
}
//short method 
function fibb2(n){
    const arr=[0,1];
    for(let i=2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[n];
}

// console.log(fibb2(3))