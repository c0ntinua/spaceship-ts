function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    target_col = Math.floor(x / pixel_width);
    target_row = Math.floor(y / pixel_height);
    console.log("row = " + target_row + "     target_col = " + target_col);
    cells[get(target_col, target_row)]++;
    if (cells[get(target_col, target_row)] >= states)
        cells[get(target_col, target_row)] = 0;
    calculatePartialAutomata(target_row);
    plotAutomata();
}
//# sourceMappingURL=input.js.map