var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var MouseConstraint = Matter.MouseConstraint;
var Mouse = Matter.Mouse;
var engine;
var world;
var particles;
var nfixedcircles = 0;
var interval


var ndown = 14;
var nacross = 18;

function setup() {
    particles = [];
    colorMode(HSB);
    createCanvas(640, 700);
    fill(0, 0, 255)
    engine = Engine.create();
    world = engine.world;
    engine.world.gravity['y'] = 1;
    World.add(engine.world, [
        Bodies.rectangle(0, 545, width * 2, 0.1, { isStatic: true }),
        Bodies.rectangle(width, 0, 25, height * 2, { isStatic: true }),
        Bodies.rectangle(0, height, 25, height * 2, { isStatic: true })
    ]);
    addcircles();
}

function draw() {
    background(242, 45, 40);
    fill(0);
    for (i = 0; i < particles.length; i++) {
        if ((i >= 14) && i !==94 && i !== 95 && i !== 96 && i !== 97 && i !== 98 && i !== 99 && i !== 100 && i !== 101 && i !== 102 && i !== 103 && i !== 104 && i !== 105 && i !== 106 && i !== 188 && i !== 189 && i !== 190 && i !== 191 && i !== 192 && i !== 193 & i !== 194 && i !== 195 && i !== 196 && i !== 197 && i !== 198 && i !== 282 && i !== 283 && i !== 284 && i !== 285 && i !== 286 && i !== 287 && i !== 288 && i !== 289 && i !== 290 && i !== 376 && i !== 377 && i !== 378 && i !== 379 && i !== 380 && i !== 381 && i !== 382 && i !== 470 && i !== 471 && i !== 472 && i !== 473 && i !== 474 && i !== 564 && i !== 565 && i !== 566 && i !== 658 && i !== 1034 && i !== 1035 && i !== 1128 && i !== 1129 && i !== 1130 && i !== 1131 &&  i !== 1222 && i !== 1223 && i !== 1224 && i !== 1225 && i !== 1226 && i !== 1227 && i !== 1316 && i !== 1317 && i !== 1318 && i !== 1319 && i !== 1320 && i !== 1321 && i !== 1322 && i !== 1323 && i !== 1410 && i !== 1411 && i !== 1412 && i !== 1413 && i !== 1414 && i !== 1415 && i !== 1416 && i !== 1417 && i !== 1418 && i !== 1419 && i !== 1504 && i !== 1505 && i !== 1506 && i !== 1507 && i !== 1508 && i !== 1509 && i !== 1510 && i !== 1511 && i !== 1512 && i !== 1513 && i !== 1514 && i !== 1515 && i !== 1598 && i !== 1599 && i !== 1600 && i !== 1601 && i !== 1602 && i !== 1603 && i !== 1604 && i !== 1605 && i !== 1606 && i !== 1607 && i !== 1608 && i !== 1609 && i !== 1610 && i !== 1611) {
            particles[i].show();
        }
       
    }
    Engine.update(engine);
}

function Particle(x, y, r, col, static) {
    this.col = col;
    var options = {
        restitution: 1,
        friction: 0
    }
    this.r = r;
    this.body = Bodies.circle(x, y, r, { friction: .001, restitution: .51, density: 100.5, isStatic: static });
    World.add(world, this.body);
}

Particle.prototype.show = function () {
    fill(this.col, 255, 0)
    noStroke();
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle + PI);
    fill(this.col, 0, 255);
    ellipse(0, 0, this.r * 2);
    pop();
}

function addcircles() {
    for (i = 0; i < nacross; i++) {
        for (j = 0; j < ndown; j++) {
            if (j % 2 != 0) {
                offset = width / (nacross * 2);
            } else {
                offset = 0;
            }
            var c = new Particle(offset + i * width / nacross, 35 + j * 35, 3, 0, true);
            particles.push(c);

            if (j == ndown - 1) {
                for (k = 0; k < 80; k++) {
                    var c = new Particle(offset + i * width / nacross, 520 + k * 1, 2, 0, true);
                    particles.push(c);
                }
            }
        }
    }
    nfixedcircles = particles.length;
}

function newBalls(x, y) {
    var p = new Particle(x, y, 15.1, 255, false);
    particles.push(p);
    interval = setInterval(() => {
        positionBalls(p.body.position.x, p.body.position.y)
    }, 100)
}

function mousePressed() {
    newBalls(width / 2 + random() - 0.5, 10);
}


