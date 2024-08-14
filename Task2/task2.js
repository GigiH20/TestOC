function sumOfTwoLargestIntegers(arr) { 
    if (arr.length < 2) { 
        throw new Error("Array must contain more than 1 integer");
    }
    const sortedArray = arr.sort((a,b) => b-a);
    const largestInt = sortedArray[0]
    const secondLargest = sortedArray[1]
    const sum = largestInt + secondLargest
    
    return {largestInt, secondLargest, sum}
}

const arr = [1,2,5,4,6,8,7,9]
const arr2 = [10,14,15,8,7,9]

const resultArr = sumOfTwoLargestIntegers(arr);
const resultArr2 = sumOfTwoLargestIntegers(arr2);

console.log("For arr:");
console.log("2 largest integers are", resultArr.largestInt, resultArr.secondLargest);
console.log("Sum of 2 largest integers is", resultArr.sum);

console.log("For arr2:");
console.log("2 largest integers are", resultArr2.largestInt, resultArr2.secondLargest);
console.log("Sum of 2 largest integers is", resultArr2.sum);