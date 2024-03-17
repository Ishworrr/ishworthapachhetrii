const btnEl = document.querySelector('.btn');
const crossEl = document.querySelector(`.cross`);
const trailerEl = document.querySelector(`.trailer`);
const videoEl = document.querySelector('video');

btnEl.addEventListener('click', () => {
trailerEl.classList.remove('active');
});


crossEl.addEventListener('click', () => {
    trailerEl.classList.add('active');
    videoEl.pause();
    videoEl.currentTime = 0;


    });