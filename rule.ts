// function plotRule() {
//     let ff = new FontFace('Monoton', url('https://fonts.googleapis.com'));
//     ff.load().then(
//         function(font) {
//             pen.fillStyle = "#FFFFFF";
//             //pen.font = "20px Noto Sans Light";
//             for (let col = 0 ; col < filter_length ; col++) {
//                 pen.beginPath();
//                 pen.fillText(filter[col], col*rule_digit_width , rule_digit_height - 2);
//                 pen.fill();
//             }
//         }
//     )
// }

function plotRule() {
    Nanum.load().then(function(font){
    document.fonts.add(font);
    console.log('Monoton Font loaded');
    pen.fillStyle = "#000000";
    pen.beginPath();
    pen.rect(0,0,canvas.width,rule_digit_height);
    pen.fill();
    pen.fillStyle = "#FFFFFF";
    pen.font = "40px Nanum";
    for (let col = 0 ; col < filter_length ; col++) {
        pen.beginPath();
        pen.fillText(filter[col], col*rule_digit_width + rule_right_adjustment , rule_digit_height + rule_down_adjustment);
        pen.fill();
    }
  });
}
// function plotRule() {

//     pen.fillStyle = "#FFFFFF";
//     pen.font = "20px Monoton";
//     for (let col = 0 ; col < filter_length ; col++) {
//         pen.beginPath();
//         pen.fillText(filter[col], col*rule_digit_width , rule_digit_height - 2);
//         pen.fill();
//     }
// }