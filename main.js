var paddle2 =10,paddle1=10;

var paddle1X = 10,paddle1Height = 110;
var paddle2Y = 685,paddle2Height = 70;

var score1 = 0, score2 =0;
var paddle1Y;

var  playerscore =0;

var pcscore =0;

var ball = {
    x:350/2,
    y:480/2,
    r:20,
    dx:3,
    dy:3
}

xPing = "";
yPing = "";
rws = "";

game_status = "";

function preload()
{
  ping_touch = loadSound("ball_touch_paddel.wav");
  ping_missed = loadSound("missed.wav");
}

function setup()
{
    canvas = createCanvas(700,600);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}


function draw()
{
  if(game_status == "start")
  {
    
  }

    image(video, 0, 0, 700, 600);

    if(rws > 0.2)
    {
      fill('#eb3474');
      stroke('#000000');
      circle(rightWristX, rightWristY, 30);
    }
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    yPing = results[0].pose.rightWrist.y;
    xPing = results[0].pose.rightWrist.x;
    rws =  results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
  }
}

function playGame()
{
  game_status = "start";
  document.getElementById("status").innerHTML = "Game is loaded";
}