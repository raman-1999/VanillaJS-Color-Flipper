const colors = ["Red","Green",'Yellow',"Blue","Orange"];

let btn = document.querySelector('#btn');
let color = document.querySelector('#color');

function randomNumber(){
    return Math.floor(Math.random() * colors.length);
};
btn.addEventListener('click', function(){
    const random = randomNumber();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
});