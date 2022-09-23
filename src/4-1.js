function solution(s) {
    // [1,2,3,4,6,7,8,0]	
    // 0이 있는지 없는지 검사한다.
    // 0이 없으면 0을 더하기에 사용해야하기 때문에 어딘가 저장해 놓는다.

    // 1이 있는지 없는지 검사한다.
    // 1이 없으면 1을 더하기에 사용해야 하기 때문에 어딘가 저장해 놓는다.

    // ....
    // 9이 있는지 없는지 검사한다.
    // 9이 없으면 9을 더하기에 사용해야 하기 때문에 어딘가 저장해 놓는다.

    // 어딘가 저장한 숫자를 다 빼내서 더한다.

    // https://school.programmers.co.kr/learn/courses/30/lessons/12916




    // 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
    //     s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

    // 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

    //     제한사항
    // 문자열 s의 길이: 50 이하의 자연수
    // 문자열 s는 알파벳으로만 이루어져 있습니다


    //"pPoooyY"	

    //1.p랑 y가 둘 다 없으면 무조건 true
    //"pPoooyY"에서 p랑 y가 있는지 검사를 한다
    // -> 루프를 사용해서 한글자씩,
    let py_count = 0;
    for (let i = 0; i < s.length; i++) {
        // p나 y에 해당하는지 검사한다.
        if (s[i] === 'p' || s[i] === 'P' || s[i] === 'y' || s[i] === 'Y') {
            py_count = py_count + 1;
        }
    }


    //1부터 10까지 더하기
    //배열의 모든 숫자를 더하기
    //문자열(배열)의 길이를 루프로 계산하기
    //



    // -> p나 y의 갯수를 센다. 갯수를 세어서 0이면 없는것이다.

    if (py_count === 0) {
        return true;
    }

    // 2.하나라도 있으면
    //p가 몇개인지 검사를 한다
    // >>개수를 리턴해줌
    let p_count = 0;
    for (let i = 0; i < s.length; i++) {
        // p나 y에 해당하는지 검사한다.
        if (s[i] === 'p' || s[i] === 'P') {
            p_count = p_count + 1;
        }
    }

    // y가 몇개인지 검사를 한다
    // >>개수를 리턴해줌
    let y_count = 0;
    for (let i = 0; i < s.length; i++) {
        // p나 y에 해당하는지 검사한다.
        if (s[i] === 'y' || s[i] === 'Y') {
            y_count = y_count + 1;
        }
    }

    // 리턴된 개수가 같으면 true를 반환하고
    if (p_count === y_count) {
        return true;
    }

    // 개수가 다르면 false를 반환한다
    if (p_count !== y_count) {
        return false;
    }






    // s	answer

    // "Pyy"	false

    return -1;


    //원래 갖고 있는 배열 0~9까지


    arr = ["0", 125346789]

    // 새로 들어온 numbers 배열을 매개변수로 받아서

    // arr의 인덱스를 반복문으로 돌면서 
    // 겹치는 숫자를 제외하고 
    // 남은 숫자를 전부 더하기 

    [01234567]

    89
    includes


}
