var html = '';
//var red;
//var green;
//var blue;  REPLACE THESE WITH FUNCTION randomRGB & randomColor
var rgbColor;

//----- CREATES RANDOM COLORS -----
function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

//----- REPLACES LINE 4 IN 'FOR' LOOP -----
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() = ',';
  color += randomRGB() = ',';
  color += randomRGB() = ')';
  return color;
}

//----- FUNCTION TO PRINT MESSAGE -----
function print(message) {
  document.write(message);
}

//----- 'FOR' LOOP WHICH ONLY CALLS FUNCTIONS & VARIABLES -----
for (var i = 0; i < 10; i += 1 ) {
//  red = randomRGB(); 
//  green = randomRGB();
//  blue = randomRGB();  SHORTER, BUT REPETITIVE COLOR CREATION
//  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);



// -----MY FIRST TRY-----

//var count = 0;

//while ( count < 10 ) {
//  red = Math.floor(Math.random() * 256 );
//  green = Math.floor(Math.random() * 256 );
//  blue = Math.floor(Math.random() * 256 );
//  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//  html += '<div style="background-color:' + rgbColor + '"></div>';
//  count += 1;
//}

//document.write(html);

