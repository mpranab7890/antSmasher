function collisionWithWall(ant) {
    if (ant.x >= canvas.width - ant.dims || ant.x <= 0) {
        ant.dx = -ant.dx;
    }
    if (ant.y >= canvas.height - ant.dims || ant.y <= 0) {
        ant.dy = -ant.dy;
    }
    // this.x += this.dx;
    // this.y += this.dy;
    // return [ant.dx, ant.dy];
}

function collisionWithant(currentant, ants) {
    ants.forEach((ant) => {
        if (currentant.index != ant.index) {
            if (currentant.x < ant.x + ant.dims && currentant.x + currentant.dims > ant.x) {
                if (currentant.y < ant.y + ant.dims && currentant.y + currentant.dims > ant.y) {
                    var DX = currentant.x - ant.x;
                    var DY = currentant.y - ant.y;
                    var distance = (Math.sqrt(DX * DX + DY * DY)) || 1;
                    var nx = DX / distance;
                    var ny = DY / distance;

                    var relvx = ant.dx - currentant.dx;
                    var relvy = ant.dy - currentant.dy;

                    var speed = (relvx * nx + relvy * ny);
                    currentant.dx += (speed * nx) * 0.5;
                    currentant.dy += (speed * ny) * 0.5;
                    ant.dx -= (speed * nx) * 0.5;
                    ant.dy -= (speed * ny) * 0.5;
                    // ball.dx = -ball.dx;
                    // ball.dy = -ball.dy;
                    // currentBall.x += currentBall.dx * Math.random();
                    // currentBall.y += currentBall.dy * Math.random();

                    currentant.x += currentant.dx;
                    currentant.y += currentant.dy;
                    ant.x += ant.dx;
                    ant.y += ant.dy;

                    collisionWithWall(currentant);
                    collisionWithWall(ant);

                    // currentant.dx *= -1;
                    // currentant.dy *= -1;
                    // currentant.x += currentant.dx * Math.random();
                    // currentant.y += currentant.dy * Math.random();
                }
            }



        }
    });
}