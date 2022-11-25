canvas.addEventListener("mousedown", function(e)
{
    getMousePosition(canvas, e);
});
//seedAutomata();
seedFilter();
calculateAutomata();
plotAutomata();
//let interval = setInterval(updatePlot,delay);
