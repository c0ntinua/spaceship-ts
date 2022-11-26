let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let pen = canvas.getContext("2d");
let global_rows : number = 39;
let global_cols : number = 107;
canvas.style.top = "50px";
canvas.style.left = "50px";
let target_col : number = 0;
let target_row : number = 0;
let delay = 10;
let rule_digit_width = 30;
let rule_digit_height = 25;
let pixel_height : number = (canvas.height - rule_digit_height)/global_rows;
let pixel_width : number  = canvas.width/global_cols;

let rule_down_adjustment = 3;
let rule_right_adjustment = 25;
let neighbors : number = 5;
let span = Math.floor(neighbors/2);
let cells : number[] = new Array(global_rows * global_cols).fill(0);
let states : number = 2;
let mountain_mode = false;
let filter_length :  number = states**neighbors;
let filter = new Array(filter_length).fill(0);
let color : string[] = ["#000000","#FFFFFF"];
// let Monoton = new FontFace('Monoton', 'url(Monoton-Regular.ttf)');
let Nanum = new FontFace('Nanum', 'url(NanumPenScript-Regular.ttf)');
// Monoton.load().then(function(font){
//   // with canvas, if this is ommited won't work
//   document.fonts.add(font);
//   console.log('Monoton Font loaded');
// });
Nanum.load().then(function(font){
    // with canvas, if this is ommited won't work
    document.fonts.add(font);
    console.log('Monoton Font loaded');
  });





