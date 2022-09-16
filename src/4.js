

// 왼손과 오른손 위치가 모두 필요함


function get_thumb(n, hand, pos_of_left, pos_of_right) {
    pos_of_left = pos_of_left.toString();
    pos_of_right = pos_of_right.toString();

    if (n === 1) {
        return "L";
    }

    if (n === 4) {
        return "L";
    }

    if (n === 7) {
        return "L";
    }

    // if (n === 3 || n === 6 || n === 9) {
    if ([3, 6, 9].includes(n)) {
        // true가 되면 여기가 실행
        return "R";
    }

    let distance = {
        0: {
            "*": 1, "#": 1, "8": 1,
            "5": 2, "7": 2, "9": 2,
            "2": 3, "4": 3, "6": 3,
            "1": 4, "3": 4
        },
        2: {
            "*": 4, "#": 4,
            "0": 3, "7": 3, "9": 3,
            "8": 2, "4": 2, "6": 2,
            "1": 1, "3": 1, "5": 1
        },
        5: {

            "*": 3, "#": 3,
            "7": 2, "9": 2, "0": 2, "1": 2, "3": 2,
            "2": 1, "4": 1, "6": 1, "8": 1,

        },
        8: {

            "*": 2, "#": 2, "4": 2, "6": 2, "2": 2,
            "0": 1, "7": 1, "5": 1, "9": 1,
            "1": 1, "3": 1,

        },
    };

    if (n === 0 || n === 2 || n === 5 || n === 8) {
        const distance_of_left = distance[n][pos_of_left];
        const distance_of_right = distance[n][pos_of_right];

        if (distance_of_left === distance_of_right) {
            return hand;
        }

        if (distance_of_left < distance_of_right) {
            return "L";
        }

        if (distance_of_right < distance_of_left) {
            return "R";
        }
    }
}

function solution(numbers, hand) {
    var answer = '';

    /*
    let pos_of_left = "*";
    let pos_of_right = "#";
    for (let i = 0; i < numbers.length; i++) {
        pos_of_left = 
    }
    */

    return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right") // "LRLLLRLLRRL"
