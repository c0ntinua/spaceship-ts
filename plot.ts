
function plotAutomata() {
    for (let row = 0 ; row < global_rows ; row++) {
        for (let col = 0 ; col < global_cols ; col++) {
            pen.fillStyle = color[cells[get(col,row)]];
            pen.beginPath();
            pen.rect(Math.floor(col*pixel_width), Math.floor(row*pixel_height) + rule_digit_height, Math.floor(pixel_width) +1, Math.floor(pixel_height)+1);
            pen.fill();   
        }
    }
}