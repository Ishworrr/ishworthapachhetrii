const inputEl = document.querySelector('input');
const circleEl = document.querySelector('circle');
const bodyEl =  document.querySelector('body');

inputEl.checked=JSON.parse(localStorage.getItem('mode'));


inputEl.checked =  true;
 console.log(inputEl.value)
abc();

function abc(){
    if(inputEl.checked){
        bodyEl.style.background='cyan';

    }else{
        bodyEl.style.background='white';
    }
}

inputEl.addEventListener('input',()=>{
    abc();
    updatelocalstorage();
})

function updatelocalstorage(){
    localStorage.setItem('mode',JSON.stringify(inputEl.checked));
}



