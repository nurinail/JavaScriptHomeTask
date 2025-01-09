//---------------------------------------- task 1---------------------------------------//

let arr = [1, 2, 3, 4, 5, 6];
let indexNumber = 5;

//  1-ci yol
let getIndex = (array, index) => {
  let result = array[index];
  return result;
};
console.log(getIndex(arr, indexNumber));

// 2-ci yol
let getResult = arr.map((index) => {
  return index;
});
console.log(getResult[indexNumber]);

//--------------------------------------- task2-----------------------------------------//


let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let getDeleteIndex = (array) => {
  let result = array.splice(0, 3);
  return result;
};
console.log(getDeleteIndex(arr2))

//---------------------------------------- task3-------------------------------------------//


let a = [1, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 8, 8, 8, 8];
let b = [4, 8, 7];
let getDeleteValue = (a, b) => {
  let c = a.filter((num) => !b.includes(num));
  return c;
};
console.log(getDeleteValue(a, b));

//-------------------------------------- task 4-------------------------------------------//


let arr4 = [1, 2, -3, -6, 7, -8, -9, 10, 11];

// 1-ci yol
let result = arr4.filter((num) => num < 0);
console.log(result);

// 2-ci yol
let arr4Result = [];
let result2 = arr4.map((num) => {
  if (num < 0) {
    arr4Result.push(num);
  }
});
console.log(arr4Result);
//--------------------------------------- task 5-------------------------------------//


let arr5 = [10, 20, 30, 40];

let getAverage = (array) => {
  let result = 0;
  array.map((num) => {
    result += num;
  });
  let averageValue = result / array.length;
  return averageValue;
};

console.log(getAverage(arr5));
