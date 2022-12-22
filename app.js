const p1button = document.querySelector('#p1Button');
const p2button = document.querySelector('#p2Button');
const reset= document.querySelector('#reset');
const playto = document.getElementById("playto"); 
let p1Display = document.getElementById("p1Display");
let p2Display = document.getElementById("p2Display");
let p1score = 0;
let p2score = 0;
let maxValue = 3; 
let isGameOver = false;

playto.addEventListener('change', function(){
    maxValue =  playto.options[playto.selectedIndex].value;
    reset1();
});

p1button.addEventListener('click', ()=>{
    if (!isGameOver){
    p1score++;
    p1Display.textContent = p1score;
        if (p1score == maxValue){
            isGameOver = true; 
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1button.disabled = true;
            p2button.disabled = true;
        }
        
    }
});

p2button.addEventListener('click', ()=>{
    if (!isGameOver){
        p2score++;
        p2Display.textContent = p2score;
            if (p2score == maxValue){
                isGameOver = true; 
                p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1button.disabled = true;
            p2button.disabled = true;
            }
            
        }
});

reset.addEventListener('click', reset1)

function reset1(){
    isGameOver = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1score = 0;
    p2score = 0;
    playto.value = 3;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1button.disabled = false;
    p2button.disabled = false;
};