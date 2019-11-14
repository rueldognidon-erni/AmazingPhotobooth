Webcam.set({
  width: 400,
  height: 300,
  image_format: 'jpeg',
  jpeg_quality: 90
});
Webcam.attach('#my_camera');

var canvas = new fabric.Canvas('myCanvas');
canvas.backgroundColor = 'yellow';

function take_snapshot() {
  // take snapshot and get image data
  Webcam.snap(function(data_uri) {
    // display results in page
    // fabric.Image.fromURL(data_uri, function(myImg) {
    //   canvas.add(myImg);
    // });
    // canvas.setOverlayImage(data_uri, canvas.renderAll.bind(canvas));
    canvas.setBackgroundImage(data_uri, canvas.renderAll.bind(canvas));
  });
}

function addSticker() {
  fabric.Image.fromURL('/web_photobooth/assets/stickers/smiley.png', function(
    oImg
  ) {
    oImg.scale(0.1);
    canvas.add(oImg);
  });
}

var imageSaver = document.getElementById('download');
imageSaver.addEventListener('click', saveImage, false);

function saveImage() {
  this.href = canvas.toDataURL({
      format: 'jpeg',
      quality: 0.8
  });
  this.download = 'canvas.jpeg'
}

// fabric.Image.fromURL('/web_photobooth/assets/stickers/smiley.png', function(
//   oImg
// ) {
//   oImg.scale(0.1);
//   canvas.add(oImg);
// });

$('#remove').click(function() {
  var object = canvas.getActiveObject();
  if (!object) {
    alert('Please select the element to remove');
    return '';
  }
  canvas.remove(object);
});
