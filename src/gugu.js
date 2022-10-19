// function gugu() {
//     let j = 2;
//     let i = 1;
//     for (; i <= 9; i++) {
//         let answer = i * j;
//         console.log(j + 'x' + i + '=' + answer);
//     }
// }
// gugu()

function howMany() {
    for (let i = 1; i < 9; i++) {
        i++;
        console.log(i);
    }
    // return i;
}
howMany()

// function howMany(selectObject) {
//     var numberSelected = 0;
//     for (var i = 0; i < selectObject.options.length; i++) {
//       if (selectObject.options[i].selected) {
//         numberSelected++;
//       }
//     }
//     return numberSelected;
//   }
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Loops_and_iteration#for_%EB%AC%B8