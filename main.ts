canvas = document.querySelector('canvas');
var myFont = new FontFace('Monoton', 'url(Monoton-Regular.ttf)');
myFont.load().then(function(font){
  // with canvas, if this is ommited won't work
  document.fonts.add(font);
  console.log('Font loaded');
});
canvas.addEventListener("mousedown", function(e)
{
    getMousePosition(canvas, e);
});
//seedAutomata();
seedFilter();
calculateAutomata();
plotAutomata();
plotRule();
//let interval = setInterval(updatePlot,delay);
