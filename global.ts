let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let pen = canvas.getContext("2d");
let global_rows : number = 100;
let global_cols : number = 300;
canvas.style.top = "50px";
canvas.style.left = "50px";
let target_col : number = 0;
let target_row : number = 0;
let delay = 10;

let pixel_height : number = canvas.height/global_rows;
let pixel_width : number  = canvas.width/global_cols;
let neighbors : number = 5;
let span = Math.floor(neighbors/2);
let cells : number[] = new Array(global_rows * global_cols).fill(0);
let states : number = 2;
let filter_length :  number = states**neighbors;
let filter = new Array(filter_length).fill(0);
let color : string[] = ["#000000","#FFFFFF"];




