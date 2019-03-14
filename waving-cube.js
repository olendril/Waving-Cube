let angle = 0;

function setup() {
	createCanvas(400,400)
}

function draw() {
	background(255)
	translate(width / 2, height / 2);
	rectMode(CENTER);

	fill(0);
	let h = map(sin(angle), -1, 1, 0, 100);
	rect(0, 0, 10, h);

	angle += 0.1;
}