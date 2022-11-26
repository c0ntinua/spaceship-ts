canvas = document.querySelector('canvas');
canvas.addEventListener("mousedown", function (e) {
    getMousePosition(canvas, e);
});
seedFilter();
if (!mountain_mode)
    seedAutomata();
calculateAutomata();
plotAutomata();
plotRule();
//# sourceMappingURL=main.js.map