function preload(){
}
function setup(){
canvas = createCanvas(400, 450);
canvas.position(150, 250);
video = createCapture(VIDEO);
video.hide();
tint_color = "";
}
function draw(){
    image(video, 0, 0, 400, 450);
    tint(tint_color);
}
function filter_tint(){
tint_color = document.getElementById("color_name").value;
}
function take_snapshot(){
save('student_name.png');
}