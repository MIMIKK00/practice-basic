const fs = require("fs")

function solution() {
    
    let s = '23four5six7';

    // const Str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// [zero, one, two, three, four, five, six, seven, eight, nine];
// 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'

    const Str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

//치환하고 싶은 문자열마다 정규식이 자동으로 대입되도록 반복문을 돌리고 싶었다
    
let total = s;
for(i=0; i<Str.length; i++) {
        let regNum= new RegExp(Str[i]);
        total = total.replace(regNum, i);
        console.log('in for', s);
    }
    console.log(s);

    return s;
}
solution();


function sum() {
    const arr = [1,2,3];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}

//s.replace는 s를 변경하지 않음
//루프할 때 값을 누적하는 상황인지 자기자신을 변경해 나가는 상황인지 구분이 필요함
// -> 누적을 할 것 인가 자기자신을 변경할것인가에 따라서 초기값을 선택해야한다.
// 초기값: 계산에 영향을 미치지 않는 값(루프가 시작될 때 어디서부터 시작될 것인지)

function test() {
    const s = "zero23four5six7";
    const i = 0;
    let target = 'zero';
    let regNum= new RegExp(target); // '/' + Str[i] + '/';
    result = s.replace(regNum, i);

    console.log("s", s);
    console.log("result", result);
}

// test();

function test1() {
    const arrStr = [[0, 'zero'], [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'], [6, 'six'], [7, 'seven'], [8, 'eight'], [9, 'nine']];
    // 치환할 정보가 담겨있는 arrStr을 차례대로 돌면서 i번 인덱스의 문자(numStr)가 s에 있는지 확인
    // 있으면 i-0번의 숫자로 바꿔넣음 
    let s = '23four5six7';
    for (let i = 0; i < arrStr.length; i++) {
        const numStr = arrStr[i][1];

        if (s.match(numStr) !== null) {
            const s2 = s.replace(numStr, arrStr[i][0]);
        }
    }
}

test1();

    

//     var reg0 = /zero/gi;
//     let result = s.replace(reg0, 0);
        
//     var reg1 = /one/gi;
//     let result1 = s.replace(reg1, 1);

//     var reg2 = /two/gi;
//     let result2 = result1.replace(reg2, 2);

//     var reg3 = /three/gi;
//     let result3 = result2.replace(reg3, 3);

//     var reg4 = /four/gi;
//     let result4 = result3.replace(reg4, 4);

//     var reg5 = /five/gi;
//     let result5 = result4.replace(reg5, 5);

//     var reg6 = /six/gi;
//     let result6 = result5.replace(reg6, 6);

//     var reg7 = /seven/gi;
//     let result7 = result6.replace(reg7, 7);

//     var reg8 = /eight/gi;
//     let result8 = result7.replace(reg8, 8);

//     var reg9 = /nine/gi;
//     let result9 = result8.replace(reg9, 9);


//     console.log(result9);

//     return parseInt(result9);

// }


// solution();




// 문자와 숫자가 섞여있는 문자열 s를 받음
   


    // for(i=0; i<Str.length; i++) {

    
    //     if (word === s.match(word)) {
    //         let result = s.replace(/zero|one|two|three|four|five|six|seven|eight|nine/gi, 0);
    //     }
    // }


    // let s0 = s.replace(/zero/gi, 0);
    // let s1 = s0.replace(/one/gi, 1);
    // let s2 = s1.replace(/two/gi, 2);
    // let s3 = s2.replace(/three/gi, 3);
    // let s4 = s3.replace(/four/gi, 4);
    // let s5 = s4.replace(/five/gi, 5);
    // let s6 = s5.replace(/six/gi, 6);
    // let s7 = s6.replace(/seven/gi, 7);
    // let s8 = s7.replace(/eight/gi, 8);
    // let s9 = s8.replace(/nine/gi, 9);

    // console.log(s9);




