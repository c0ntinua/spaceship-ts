canvas = document.querySelector('canvas');

canvas.addEventListener("mousedown", function(e)
{
    getMousePosition(canvas, e);
});
//seedAutomata();
seedFilter();
if (!mountain_mode) seedAutomata();
calculateAutomata();
plotAutomata();
plotRule();
//let interval = setInterval(updatePlot,delay);
