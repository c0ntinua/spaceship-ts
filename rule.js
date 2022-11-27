function plotRule() {
    Nanum.load().then(function (font) {
        document.fonts.add(font);
        console.log('Monoton Font loaded');
        pen.fillStyle = "#000000";
        pen.beginPath();
        pen.rect(0, 0, canvas.width, rule_digit_height);
        pen.fill();
        pen.fillStyle = "#FF0000";
        pen.font = "40px Nanum";
        for (let col = 0; col < filter_length; col++) {
            pen.beginPath();
            pen.fillText(filter[col], col * rule_digit_width + rule_right_adjustment, rule_digit_height + rule_down_adjustment);
            pen.fill();
        }
    });
    setFilter();
}
function getFilter() {
    let filter_code = document.getElementById(`filter`).value;
    filter = getRule(filter_code);
}
function getRule(filter_code) {
    let filter_cell = [];
    let temp = 0;
    for (let i = 0; i < filter_length; i++) {
        if (filter_code.length <= i) {
            filter_cell.push(0);
        }
        else {
            filter_cell.push(parseInt(filter_code[i]));
        }
    }
    return filter_cell;
}
function setFilter() {
    let filter_code = getCode(filter);
    document.getElementById(`filter`).value = filter_code;
}
function getCode(filter) {
    let code = "";
    for (let i = 0; i < filter_length; i++) {
        code = code.concat(filter[i].toString());
    }
    return code;
}
//# sourceMappingURL=rule.js.map