/// <reference path="./p5.d/p5.global-mode.d.ts" />

/** @type {{x: number; y: number; isPrime: boolean}[]} */
let points = [];

/** @type {} */
let slider;

// https://stackoverflow.com/a/40200710/15938350
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

function setup() {
  createCanvas(800, 600);

  // create slider element
  slider = createSlider(0.1, 500, 1, 0.1);
  slider.style("width", "400px");

  // create points (i,i) in polar coordinates
  for (let i = 0; i < 250_000; i++) {
    if (!isPrime(i)) continue;

    let x = i * cos(i);
    let y = i * sin(i);
    points.push({ x, y });
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  scale(1 / slider.value());

  stroke(0, 255, 255);
  strokeWeight(2 * slider.value());

  for (let i = 0; i < points.length; i++) {
    point(points[i].x, points[i].y);
  }
}
