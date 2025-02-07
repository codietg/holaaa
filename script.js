const flowerColors = ['#FFFFFF', '#FFFFFF'];
const flowerCount = 30;
const heartCount = 20;

for (let i = 0; i < flowerCount; i++) {
    let flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.color = flowerColors[0];
    flower.style.fontSize = `${Math.random() * 30 + 20}px`;
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${Math.random() * 5 + 5}s`;
    flower.style.animationDelay = `${Math.random() * 10}s`;
    flower.innerHTML = '🌸';
    document.body.appendChild(flower);
}

for (let i = 0; i < flowerCount; i++) {
    let flower = document.createElement('div');
    flower.className = 'white-flower';
    flower.style.fontSize = `${Math.random() * 30 + 20}px`;
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${Math.random() * 5 + 5}s`;
    flower.style.animationDelay = `${Math.random() * 10}s`;
    flower.innerHTML = '🌸';
    document.body.appendChild(flower);
}

for (let i = 0; i < heartCount; i++) {
    let heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.width = `${Math.random() * 20 + 10}px`;
    heart.style.height = heart.style.width;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
    heart.style.animationDelay = `${Math.random() * 10}s`;
    document.body.appendChild(heart);
}

document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('gif-container').style.display = 'block';
});

document.getElementById('no-btn').addEventListener('click', function() {
    const noBtn = document.getElementById('no-btn');
    noBtn.innerText = 'Haww, how can you do this?';
    noBtn.style.fontSize = '0.8em';

    noBtn.removeEventListener('click', arguments.callee);
    noBtn.addEventListener('click', function() {
        noBtn.innerText = 'Not gonna happen;)';
        noBtn.style.fontSize = '0.6em';

        noBtn.removeEventListener('click', arguments.callee);
        noBtn.addEventListener('click', function() {
            noBtn.innerText = 'FUCK YOUUU<3';
            noBtn.style.fontSize = '0.4em';

            noBtn.removeEventListener('click', arguments.callee);
            noBtn.addEventListener('click', function() {
                noBtn.innerText = 'OH NOOOOO!!';
                noBtn.style.fontSize = '0.3em';

                noBtn.removeEventListener('click', arguments.callee);
                noBtn.addEventListener('click', function() {
                    noBtn.innerText = 'Fuck Me ;P';
                    noBtn.style.fontSize = '0.2em';

                    noBtn.removeEventListener('click', arguments.callee);
                    noBtn.addEventListener('click', function() {
                        noBtn.style.display = 'none';
                    });
                });
            });
        });
    });
});
