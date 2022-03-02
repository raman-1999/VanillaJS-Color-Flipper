const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let btn = document.querySelector('#btn');
let color = document.querySelector('#color');

function randomNumber(){
    return Math.floor(Math.random() * colors.length);
};

btn.addEventListener('click', function(){
    let hex = "#";
    const random = randomNumber();
    for (var i = 0; i<=5 ;i++){
        hex += colors[randomNumber()];
    }
    document.body.style.backgroundColor = hex;
    color.textContent = hex;
});

