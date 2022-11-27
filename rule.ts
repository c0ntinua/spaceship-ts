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
    //pen.fillStyle = "#FFFFFF";
    pen.fillStyle = "#FF0000";
    pen.font = "40px Nanum";
    for (let col = 0 ; col < filter_length ; col++) {
        pen.beginPath();
        pen.fillText(filter[col], col*rule_digit_width + rule_right_adjustment , rule_digit_height + rule_down_adjustment);
        pen.fill();
    }
  });
  setFilter();
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

function getFilter() {
  let filter_code = (document.getElementById(`filter`) as HTMLInputElement).value;
  filter =  getRule(filter_code);
}

function getRule(filter_code :  string) {
  let filter_cell = [];
  let temp = 0;
  for (let i = 0; i < filter_length; i++) {
      if (filter_code.length <= i) {
          filter_cell.push(0);
      } else {
          filter_cell.push(parseInt(filter_code[i])); 
          // if (parseInt(code[i]) == 1) filter_cell.push(1); 
          // else filter_cell.push(0);
      }    
  }
  return filter_cell;
}
// ((document.getElementById("rows")) as HTMLInputElement).value = global_rows.toString();
// parseInt(((document.getElementById("rows")) as HTMLInputElement).value);

function setFilter() {
  let filter_code = getCode(filter);
  (document.getElementById(`filter`) as  HTMLInputElement).value = filter_code;
}

function getCode(filter : number[]) {
  let code = "";
  for (let i = 0; i < filter_length; i++) {
      code = code.concat(filter[i].toString());
  }
  return code;
}