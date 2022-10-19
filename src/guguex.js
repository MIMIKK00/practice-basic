
function guguDan() {

    //구구단: 2~9까지의 숫자에 모두 1~9까지의 9자리를 곱한 값을 출력

    //2단을 수동으로 넣어줌
    let j = 2;

    //1~9까지 for문으로 증감시켜서 알아서 곱하게 만든다
    for (i = 1; i < 9; i++) {
        answer = i * j;
        console.log(j + 'x' + i + '=' + answer);
    }
}

guguDan();


// function consoleTest() {

//     let i = 0;
//     for (let i = 1; i <= 9; i++) {
//         let value = i * 3;
//         console.log(value)
//     }

// }
// consoleTest()


function consoleTest2() {

    let i = 2;
    for (let i = 1; i <= 9; i++) {
        i * 3;
        console.log(i * 3)
    }
    console.log(i * 3)

}
consoleTest2()