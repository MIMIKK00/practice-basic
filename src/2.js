const fs = require("fs")

function main() {
    const input = fs.readFileSync("input2.txt", "utf-8")


    //줄바꿈 기준으로 각 요소를 가져와서 배열로 만든다
    const arr = input.toString().split("\r\n")

    //각 요소 안에서 스트링이랑 숫자를 스페이스바 기준으로 분리해서 다시 두개의 배열을 만든다
    //배열의 map은 for 루프를 대체하는 수단이 될 수도 있다.

    const arr1 = arr.map(x => x.split(" "))

    // for (i = 0; i < arr.length; i++) {

    //     const a = arr1[i] + arr1[i + 1] + arr1[i + 2] 
    //     const b = arr1[i + 1] + arr1[i + 2] + arr1[i + 3]

    //     if (a < b) {
    //       count = count + 1; // count++
    //     }
    //   }

    //arr1에 들어있는 요소를 순차적으로(for) 돌면서 0번 인덱스에 어떤 단어가 들어있는지 기준으로
    //나눠서 세 개의 배열로 넣고 싶음

    const arr_forward = [];
    const arr_down = [];
    const arr_up = [];
    for (let i = 0; i < arr1.length; i++) {
        const word = arr1[i][0];
        if (word === "forward") {
            arr_forward.push(arr1[i][1])
        } else if (word === "down") {
            arr_down.push(arr1[i][1])
        } else if (word === "up") {
            arr_up.push(arr1[i][1])
        }
    }

    // 세 개의 배열 모두 number로 바꾸는 과정을 하고 싶음
    const arr_number_forward = arr_forward.map(Number);
    const arr_number_down = arr_down.map(Number);
    const arr_number_up = arr_up.map(Number);

    //.map(x => Number(x));

    // forward 넘버 배열에 있는 숫자들은 모든 인덱스를 돌면서 전부 더해서 산출1

    let result1 = 0;

    for (let i = 0; i < arr_number_forward.length; i++) {
        result1 = result1 + arr_number_forward[i]
    }
    //down 넘버 배열에 있는 값을 모든 인덱스를 돌면서 전부 합산하고

    let result2 = 0;

    for (let i = 0; i < arr_number_down.length; i++) {
        result2 = result2 + arr_number_down[i]
    }

    //up 넘버 배열에 있는 값도 모두 합산해서
    let result3 = 0;

    for (let i = 1; i < arr_number_up.length; i = i + 1) {
        result3 = result3 + arr_number_up[i]
    }
    // down에서 up을 빼서 산출2

    const result4 = result2 - result3

    // 1에다 2를 곱함

    const answer = result1 * result4;
    console.log(answer);

}

main();