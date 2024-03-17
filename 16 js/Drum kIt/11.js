const kit=['snare','kick','crash','drum'];
const containerEl = document.querySelector('.container');

kit.forEach(kit => {
    const btnEl= document.createElement('button');
    
    btnEl.classList.add('btn');
    btnEl.innerText =kit;
    containerEl.appendChild(btnEl);
    btnEl.style.backgroundImage = 'url(images/' +kit+ '.png';

    const audioEl=document.createElement('audio'); 
    containerEl.appendChild(audioEl);
    audioEl.src='sounds/'+kit+'.mp3';


    btnEl.addEventListener('click',()=>{
        audioEl.play();
    });

    window.addEventListener('keydown',(a)=>{
        if(a.key===kit.slice(0,1)){
            audioEl.play();
            btnEl.style.transform="scale(.4)";

            setTimeout(() => {
                btnEl.style.transform='scale(1)';
            }, 250);
            
        }
    });
});