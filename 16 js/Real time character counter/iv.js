const textareaEl= document.getElementById('textarea');
const totalCounterEl= document.getElementById('total-counter');
const remainCounterEl= document.getElementById('remaining-counter');
textareaEl.addEventListener('keyup',()=>{
    updateCounter();
});
updateCounter();
function updateCounter(){
   totalCounterEl.innerText = textareaEl.value.length;
   remainCounterEl.innerText=textareaEl.getAttribute('maxlength') - textareaEl.value.length
}