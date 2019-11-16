function init() {
  document.getElementById('timer').style.visibility = "hidden";
}

Webcam.set({
  width: 400,
  height: 300,
  image_format: 'jpeg',
  jpeg_quality: 90
});
Webcam.attach('#my_camera');

var canvas = new fabric.Canvas('myCanvas');
canvas.backgroundColor = 'yellow';

function showTimer() {
  document.getElementById('timer').style.visibility = "visible";
  document.getElementById('counter').innerHTML = '5';

  setTimeout(() => {
    document.getElementById('counter').innerHTML = '4';
  }, 1000);

  setTimeout(() => {
    document.getElementById('counter').innerHTML = '3';
  }, 2000);

  setTimeout(() => {
    document.getElementById('counter').innerHTML = '2';
  }, 3000);

  setTimeout(() => {
    document.getElementById('counter').innerHTML = '1';
  }, 4000);

  setTimeout(() => {
    document.getElementById('timer').style.visibility = "hidden";
    alert('take snapshot');
  }, 5000);
}

function take_snapshot() {
  // take snapshot and get image data
  Webcam.snap(function(data_uri) {


    togglePreview();

    // display results in page
    // fabric.Image.fromURL(data_uri, function(myImg) {
    //   canvas.add(myImg);
    // });
    // canvas.setOverlayImage(data_uri, canvas.renderAll.bind(canvas));
    canvas.setBackgroundImage(data_uri, canvas.renderAll.bind(canvas));
  
  });


}

function save_photo(){

  

  var image = canvas.toDataURL("image/jpeg");

  $("#galleryRow")
  .append("<div class='col-md-2'><img src='" + 
  image + "' style='width:100'/></div>");

  togglePreview();
}

function togglePreview(){
  var preview = document.getElementById('previewRow');
  var camera = document.getElementById('cameraRow');
  preview.classList.toggle("d-none");
  camera.classList.toggle("d-none");

  var takeButton = document.getElementById('takeButton');
  var saveButton = document.getElementById('saveButton');

  takeButton.classList.toggle("d-none");
  saveButton.classList.toggle("d-none");


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
