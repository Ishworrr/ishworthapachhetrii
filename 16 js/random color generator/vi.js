const containerEl = document.querySelector('.container');


for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
    
};

const colorContainerEl = document.querySelectorAll('.color-container');

generateColor();
function generateColor(){
    colorContainerEl.forEach((colorContainerEl)=>{
        const newcolorCode = randomColors();
        console.log(newcolorCode);
        colorContainerEl.style.backgroundColor = "#" + newcolorCode;
        colorContainerEl.innerText ="#" + newcolorCode;

    });
}

function randomColors(){
    const chars="0123456789abcdef"
    const colorLength =6;
    let colorCode ="";
for (let index = 0; index < colorLength; index++) {
    const randomNum  = Math.floor(Math.random()*chars.length);
  
    colorCode+=chars.substring(randomNum,randomNum+1);
   
}

return colorCode;
}