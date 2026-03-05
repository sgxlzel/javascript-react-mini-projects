const mybtn = document.getElementById("myBtn");
const mylabel = document.getElementById("mylabel");
const min = 1;
const max = 6;
let randomNum;

mybtn.addEventListener("click", () => {
    randomNum = Math.floor(Math.random() * (max - min +1)) + min;
    
    mylabel.innerText = `You got: ${randomNum}`;
});