let spritesheetBlink;
let spritedataBlink;
let spritesheetEye;
let spritedataEye;
let blinkAnimation = [];
let eyeAnimation = [];
let pupil;
let words;
let eye;
let blink;
let counter;
let change;
function preload(){
  spritedataBlink = loadJSON('blink.json');
  spritesheetBlink = loadImage('Spritesheets/Blink.png');
  spritedataEye = loadJSON("eye.json");
  spritesheetEye = loadImage("Spritesheets/Eye.png");
}

function setup() {
  createCanvas(1920, 1080);
  let blinkFrames = spritedataBlink.frames;
  for (let i = 0; i < blinkFrames.length; i++){
    let pos = blinkFrames[i].position;
    let img = spritesheetBlink.get(pos.x, pos.y, pos.w, pos.h);
    blinkAnimation.push(img);
  }
  blink = new Sprite("blink", blinkAnimation, 0.06, 0, 0);

let eyeFrames = spritedataEye.frames;
for (let i = 0; i < eyeFrames.length; i++){
  let pos = eyeFrames[i].position;
  let img = spritesheetEye.get(pos.x, pos.y, pos.w, pos.h);
  eyeAnimation.push(img);
}
  eye = new Sprite("eye", eyeAnimation, 0.06, 0, 0);
  pupil = loadImage("Images/Pupil/pupil.png");
  words = loadImage("Images/Words/0.png");
  anim = new Sprite("eye", eyeAnimation, 0.06, 0, 0);
  counter = 0;
  change = false;
}
// End of Setup

function draw() {
background(255);
image(pupil, 0, 0);
image(words, 0, 0);
anim.show();
anim.animate();
let frame = anim.getFrame();
if (anim.name == "blink")
{
  if (frame == 3 && change == false)
  {
    change == true;
    if (counter < 2)
    {
      counter += 1;
    } else {
      counter = 0;
    }
    let wordimg = str(counter);
    wordimg = "Images/Words/"+ wordimg + ".png"
    words = loadImage(wordimg);
        }
    if (frame == 6)
    {
      anim = new Sprite("eye", eyeAnimation, 0.06, 0, 0);
      change = false;
    }
  }
}

function mousePressed(){
//  console.log(counter);
  let name = anim.name;
  if (name == "eye"){
    anim = new Sprite("blink", blinkAnimation, 0.06, 0, 0);
  }
//  let frame = anim.getFrame()
}
