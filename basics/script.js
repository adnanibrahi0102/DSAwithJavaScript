// question 1: sum of natural numbers

const sumOfAllNaturalNumbers = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
  // return num*(num+1)/2; also this methois its very simple without use of for loop
};

// console.log(sumOfAllNaturalNumbers(3));

// question 2: find the sum of digits of a Number

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
// console.log(sumOfDigits(123));

// question 3: count the number of digits in given number

function countNumberOfDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}


console.log(countNumberOfDigits(1213));

//question 4: find the palindrome of a number

const isPalindrome=(num)=>{
    const originalNumber=num; //Storing the original value of the number
    let reversedNumber=0;

    while(num>0){
        const digit=num%10 ; //removes last digit from num 
        reversedNumber=reversedNumber*10+digit; //Adds calculation to the ones place of reversedNumber.
        num=Math.floor(num/10);//Removes the last digit from number.
    }
    return originalNumber==reversedNumber;
}
console.log(isPalindrome(222))


// question 5:Fibbonacci series

function fibonacci(num){
   //0 1 1 2 3 5 8 13
   if(num<2){
    return  num;
   }
  let prev=0;
  let current=1;
  let next;
   for(let i=2;i<=num;i++){
    next =prev+current; //upadting next
    prev=current; //updating prev
    current=next; //updating current
   }
   return next;
}
// console.log(fibonacci(150))

const fibb=(num)=>{
  if(num<2){
    return num;
  }
  let prev=0;
  let current=1;
  let next;
  let i=2;

  while(i<=num){
    next =prev +current;
    prev=current;
    current=next;
    i++;
  }
  return next;
}

console.log(fibb(4))
const num=[1,2,3,5];
function findMissingNumber(num){
  let sum=0;
  for(let i=0;i<num.length;i++){
    sum =sum+num[i];
  }
  return num.length*(num.length+1)/2-sum;
}
  // return num.length*(num.length+1)/2-num.reduce((acc,curr)=>acc+curr,0); //n*(n+1)/2 sum of an arithmetic series
