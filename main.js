canvas = document.querySelector('canvas');
var myFont = new FontFace('Monoton', 'url(Monoton-Regular.ttf)');
myFont.load().then(function (font) {
    document.fonts.add(font);
    console.log('Font loaded');
});
canvas.addEventListener("mousedown", function (e) {
    getMousePosition(canvas, e);
});
seedFilter();
calculateAutomata();
plotAutomata();
plotRule();
//# sourceMappingURL=main.js.map