// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');

// create a rectangle object
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});

// "add" rectangle onto canvas
canvas.add(rect);


// create a rectangle with angle=45
var rect = new fabric.Rect({
  left: 200,
  top: 200,
  fill: 'blue',
  width: 20,
  height: 20,
  angle: 45
});

canvas.add(rect);

// adding of image
fabric.Image.fromURL('/web_photobooth/assets/images/dog.jpg', function(oImg) {
  // oImg.left(250);
  canvas.add(oImg.set({
    left: 250, 
    top: 250
  }));
});