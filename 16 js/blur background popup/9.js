const containerEl = document.querySelector('.container');
const btnEl = document.querySelector('.btn');
const popupContainerEl = document.querySelector('.popup-container');
const closeIConEl = document.querySelector('.close-icon');

btnEl.addEventListener('click',()=>{
    containerEl.classList.add('active');
    popupContainerEl.classList.remove('active');
});
closeIConEl.addEventListener( 'click' , () => {
    containerEl.classList.remove('active');
    popupContainerEl.classList.add('active')});

