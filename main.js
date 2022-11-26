canvas = document.querySelector('canvas');
canvas.addEventListener("mousedown", function (e) {
    getMousePosition(canvas, e);
});
setChoices();
seedFilter();
seedAutomata();
calculateAutomata();
plotAutomata();
plotRule();
//# sourceMappingURL=main.js.map