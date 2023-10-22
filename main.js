leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(500,500);
    canvas.position(560,200);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x; 
        rightWristX=results[0].pose.rightWrist.x; 
        difference= floor(leftWristX-rightWristX);
        document.getElementById("asdf").innerHTML = "The font size of the text will be - "+ difference;
    }
 }


function draw(){
    background('#969A97');
    textSize(difference);
    fill("#FFE787");
    text("PRARAV",50,400 );
}


