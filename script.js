let player = document.getElementById("player");
let enemy = document.getElementById("enemy");
let scoreText = document.getElementById("score");

let playerPosition = 155;
let score = 0;

function moveLeft() {

    if (playerPosition > 10) {
        playerPosition -= 20;
        player.style.left = playerPosition + "px";
    }

}

function moveRight() {

    if (playerPosition < 300) {
        playerPosition += 20;
        player.style.left = playerPosition + "px";
    }

}

function shoot() {

    let bullet = document.createElement("div");

    bullet.innerHTML = "🔵";

    bullet.style.position = "absolute";
    bullet.style.left = playerPosition + 12 + "px";
    bullet.style.bottom = "60px";

    document.getElementById("game").appendChild(bullet);

    let bulletPosition = 60;

    let bulletTimer = setInterval(function () {

        bulletPosition += 10;

        bullet.style.bottom = bulletPosition + "px";

        let bulletTop = bullet.offsetTop;
        let enemyTop = enemy.offsetTop;

        if (
            bulletTop <= enemyTop + 40 &&
            bulletTop >= enemyTop - 20 &&
            Math.abs(
                bullet.offsetLeft - enemy.offsetLeft
            ) < 40
        ) {

            score++;

            scoreText.innerHTML = "Score: " + score;

            enemy.style.left =
                Math.floor(Math.random() * 300) + "px";

            enemy.style.top =
                Math.floor(Math.random() * 200) + "px";

            bullet.remove();

            clearInterval(bulletTimer);
        }

        if (bulletPosition > 500) {

            bullet.remove();

            clearInterval(bulletTimer);
        }

    }, 30);
}