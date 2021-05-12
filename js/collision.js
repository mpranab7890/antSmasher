function collisionWithWall(ant) {
    if (ant.x >= canvasWidth - ant.dims || ant.x <= 0) {
        ant.dx = -ant.dx;
    }
    if (ant.y >= canvasHeight - ant.dims || ant.y <= 0) {
        ant.dy = -ant.dy;
    }
    // this.x += this.dx;
    // this.y += this.dy;
    // return [ant.dx, ant.dy];
}

function collisionWithant(currentAnt, ants) {
    ants.forEach((ant) => {
        if (currentAnt.index != ant.index) {
            if (currentAnt.x < ant.x + ant.dims && currentAnt.x + currentAnt.dims > ant.x) {
                if (currentAnt.y < ant.y + ant.dims && currentAnt.y + currentAnt.dims > ant.y) {
                    let angle = Math.atan2(currentAnt.y - ant.y, currentAnt.x - ant.x);
                    let sin = Math.sin(angle);
                    let cos = Math.cos(angle);

                    // ant1 perpendicular velocities
                    let vx1 = (currentAnt.dx * cos + currentAnt.dy * sin);
                    let vy1 = (currentAnt.dy * cos - currentAnt.dx * sin);

                    // ant2 perpendicular velocities
                    let vx2 = (ant.dx * cos + ant.dy * sin);
                    let vy2 = (ant.dy * cos - ant.dx * sin);

                    // swapping the x velocity     
                    currentAnt.dx = (vx2 * cos - vy1 * sin);
                    currentAnt.dy = (vy1 * cos + vx2 * sin);
                    ant.dx = (vx1 * cos - vy2 * sin);
                    ant.dy = (vy2 * cos + vx1 * sin);
                    // currentAnt.dx *= -1;
                    // currentAnt.dy *= -1;
                    // currentAnt.x += currentAnt.dx * Math.random();
                    // currentAnt.y += currentAnt.dy * Math.random();

                    collisionWithWall(currentAnt);
                    collisionWithWall(ant);


                }
            }



        }
    });
}