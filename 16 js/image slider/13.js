const nextEl = document.querySelector('.next');
const prevEl = document.querySelector('.prev');
const imgEl = document.querySelector('.image');
const iEl = document.querySelectorAll('img');

 let newA = 1;
 let timeout;

nextEl.addEventListener('click',()=>{
newA++;
clearTimeout(timeout);
img();
});
prevEl.addEventListener('click',()=>{
    newA--;
    clearTimeout(timeout);
    img();
    });

img();
function img(){
    if(newA > iEl.length){
        newA=1;
}else if(newA<1){
    newA  = iEl.length;

}
    imgEl.style.transform = `translateX(-${(newA - 1) * 500}px)`;
    timeout = setTimeout(()=>{
        newA++;
        img();
    },3000)
}