var canvas = document.getElementById('canvas-1');
var score = document.querySelector('.score');
var canvasWidth = 1000;
var canvasHeight = 800;
canvas.style.width = canvasWidth + 'px';
canvas.style.height = canvasHeight + 'px';

var noOfAnts = 20;
var noOfDeaths = 0;
var ants = [];


function Ant(index, x, y, dims) {
    this.dims = dims
    this.index = index
    this.x = x;
    this.y = y;
    this.dx = getRandomNumber(-2, 2);
    while (this.dx > -0.1 && this.dx < 0.1) {
        this.dx = getRandomNumber(-2, 2);
    }
    this.dy = getRandomNumber(-2, 2);
    while (this.dy > -0.1 && this.dy < 0.1) {
        this.dy = getRandomNumber(-2, 2);
    }

    this.antImage = document.createElement('div');
    this.antImage.style.width = this.dims + 'px';
    this.antImage.style.height = this.dims + 'px';
    this.antImage.style.position = 'absolute';
    this.antImage.style.background = 'url(../images/ant.gif)';
    this.antImage.style.backgroundRepeat = 'no-repeat';
    this.antImage.style.backgroundSize = '100% 100%';
    this.antImage.style.left = this.x + 'px';
    this.antImage.style.top = this.y + 'px';
    canvas.appendChild(this.antImage)
    this.antImage.onclick = function () {
        canvas.removeChild(this.antImage);
        noOfDeaths++;
        score.innerHTML = noOfDeaths;
        if (noOfDeaths == noOfAnts) {
            canvas.innerHTML = 'CONGRATULATIONS!!!';
        }
        ants = ants.filter(function (ant) {
            return ant.index != this.index
        }.bind(this));

        console.log(ants.length);
    }.bind(this);

    this.draw = function () {
        // this.image.onLoad = function () {
        //     ctx.drawImage(this.image, this.x, this.y)
        // }.bind(this);
        // ctx.drawImage(this.image, this.x, this.y, this.dims, this.dims);
        this.antImage.style.left = this.x + 'px';
        this.antImage.style.top = this.y + 'px';

    }.bind(this);

    this.moveant = function () {
        collisionWithWall(this)
        collisionWithant(this, ants)
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }.bind(this)

}

for (var i = 0; i < noOfAnts; i++) {
    var dims = getRandomNumber(15, 80)
    var x = getRandomNumber(1 + dims, canvasWidth - dims);
    var y = getRandomNumber(1 + dims, canvasHeight - dims);
    var ant = new Ant(i, x, y, dims)
    ant.draw();
    ants.push(ant);
}

function animate() {
    requestAnimationFrame(animate)
    // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ants.forEach(function (ant) {
        ant.moveant();
    })
}
animate();





