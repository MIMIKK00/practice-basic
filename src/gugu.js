
function guguDan() {

    //구구단: 2~9까지의 숫자에 모두 1~9까지의 9자리를 곱한 값을 출력

    //2단을 수동으로 넣어줌
    let j = 2;

    //1~9까지 for문으로 증감시켜서 알아서 곱하게 만든다
    for (i = 1; i < 9; i++) {
        answer = i * j;
        return answer;
    }
    console.log(j + "X" + i, answer);
}

guguDan();