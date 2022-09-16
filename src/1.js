
//commonjs 설치하라고 뜨는거

//1. url을 타고 가면 있는 숫자를 받아서 인자로 넣어야 함
//https://adventofcode.com/2021/day/1/input
// >> 숫자를 긁어서 저장한 txt파일을 readfilesync로 읽기

const fs = require("fs")

function main() {
  let readFileSync = fs.readFileSync;
  const input = readFileSync("input.txt", "utf-8")

  // let fs.readFileSync("input.txt", "utf-8") = 0;
  // console.log(input)

  const arr = input.toString().split("\n")
  const arr1 = arr.map(Number);

  let count = 0;
  for (i = 0; i < arr.length; i++) {

    const a = arr1[i] + arr1[i + 1] + arr1[i + 2]
    const b = arr1[i + 1] + arr1[i + 2] + arr1[i + 3]

    if (a < b) {
      count = count + 1; // count++
    }
  }
  console.log(count);
}

main();




// console.log(input)

//2. txt 파일의 숫자들을 배열로 만들어야 함
// console.log(arr1[i]);

//만든 배열에서 앞의 요소 뒤의 요소 비교
//배열의 위치 0부터 시작해서 for문 돌려서 조건에 맞는 경우의 수를 카운트 >



// let step;
// for (step = 0; step < 5; step++) {
//   // Runs 5 times, with values of step 0 through 4.
//   console.log(step);
// }


// 1번은 한 번만 실행되고 2,3,4가 계속 반복되는 것
// let x = 1;
// x = 2;
// const y = 1;
// y = 2;
1.         2.      4.
for (let i = 0; i < 10; i++) {
  3.
  console.log(i);
}

let i = 0;
if (i < 10) {
  console.log(i);
}
i++;

if (i < 10) {
  console.log(i);
}
i++;

if (i < 10) {
  console.log(i);
}
i++;

if (i < 10) {
  console.log(i);
}
i++;

if (i < 10) {
  console.log(i);
}
i++;

if (i < 10) {
  console.log(i);
}
i++;

// i가 10이 되면 코드가 여기서 중단 -> for가 여기서 끝남
if (i < 10) {
  console.log(i);
}
i++;


// 2번 test가 false 이면 이 위치로 코드실행이 이동

/*
1. i == 0 -> i < 10
2. i++, i == 1 -> i < 10

...

9. i++, i == 8 -> i < 10
10. i++, i == 9 -> i < 10
11. i++, i == 10 -> i < 10 -> false 이기 때문에 for의 body가 실행되지 않음
*/


let i, sum = 0;
for (i = 1; i <= 10; i++) {
  sum = sum + i;
}

sum -> 0 // initialize
sum -> sum + 1 -> 0 + 1 -> 1
sum -> sum + 2 -> 1 + 2 -> 3
sum -> sum + 3 -> ((0 + 1) + 2) + 3 -> 6


let i;
i = 0;
if (i <= 10) {
  let sum = 0;
  sum = sum + i;
}
i++;

if (i <= 10) {
  let sum = 0;
  sum = sum + i;
}
i++;

if (i <= 10) {
  let sum = 0;
  sum = sum + i;
}
i++;

if (i <= 10) {
  sum = sum + i;
}
i++;

if (i <= 10) {
  sum = sum + i;
}
i++;

if (i <= 10) {
  sum = sum + i;
}
i++;

if (i <= 10) {
  sum = sum + i;
}
i++;

let a = [1, 2, 3];
a[0] = 10;
a["name"] = "Jason"

