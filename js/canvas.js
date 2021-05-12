var canvas = document.getElementById('canvas-1');
var ctx = canvas.getContext('2d');
var noOfants = 10;
var ants = [];

canvas.addEventListener('click', function (e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x, y);
    ants.forEach((ant, index) => {
        if (x > ant.x && x < ant.x + ant.dims) {
            if (y > ant.y && y < ant.y + ant.dims) {
                console.log("here");
                ants.splice(index, 1);
            }
        }
    })
});

function Ant(index, x, y, dims) {
    this.dims = dims
    this.index = index
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = "../images/ant.gif";

    this.dx = getRandomNumber(-2, 2);
    while (this.dx > -0.5 && this.dx < 0.5) {
        this.dx = getRandomNumber(-2, 2);
    }
    this.dy = getRandomNumber(-2, 2);
    while (this.dy > -0.5 && this.dy < 0.5) {
        this.dy = getRandomNumber(-2, 2);
    }

    this.draw = function () {
        // this.image.onLoad = function () {
        //     ctx.drawImage(this.image, this.x, this.y)
        // }.bind(this);
        ctx.drawImage(this.image, this.x, this.y, this.dims, this.dims);

    }.bind(this);

    this.moveant = function () {
        this.x += this.dx;
        this.y += this.dy;
        collisionWithWall(this)
        collisionWithant(this, ants)

        this.draw();
    }.bind(this)

}

for (var i = 0; i < noOfants; i++) {
    var dims = getRandomNumber(15, 80)
    var x = getRandomNumber(1 + dims, canvas.width - dims);
    var y = getRandomNumber(1 + dims, canvas.height - dims);
    var ant = new Ant(i, x, y, dims)
    ant.draw();
    ants.push(ant);
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ants.forEach(function (ant) {
        ant.moveant();
    })
}
animate();





