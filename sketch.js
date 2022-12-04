function setup() {

    // Create Canvas of given size 
    createCanvas(400, 300);

}

function draw() {

    background(220);
    // Use color() function
    let c = color('red');
    // Use fill() function to fill color
    fill(c);
    // Draw a circle 
    circle(mouseX, mouseY, 150);

}
