function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("x = " + x + " y = " + y);
    if (y <= rule_digit_height) {
        userUpdateFilter(x, y);
    }
    else {
        target_col = Math.floor(x / pixel_width);
        target_row = Math.floor((y - rule_digit_height) / pixel_height);
        console.log("row = " + target_row + "     target_col = " + target_col);
        cells[get(target_col, target_row)]++;
        if (cells[get(target_col, target_row)] >= states)
            cells[get(target_col, target_row)] = 0;
        calculatePartialAutomata(target_row);
        plotAutomata();
    }
}
function userUpdateFilter(x, y) {
    let target_index = 0;
    if (x >= 0 && x <= canvas.width) {
        target_index = Math.floor((x - rule_right_adjustment) / rule_digit_width);
        filter[target_index]++;
        if (filter[target_index] >= states)
            filter[target_index] = 0;
    }
    plotRule();
    calculatePartialAutomata(1);
    plotAutomata();
}
//# sourceMappingURL=input.js.map