canvas = document.querySelector('canvas');

canvas.addEventListener("mousedown", function(e) {
    getMousePosition(canvas, e);
});

setChoices();
seedFilter();
if (!mountain_mode) seedAutomata();
calculateAutomata();
plotAutomata();
plotRule();
