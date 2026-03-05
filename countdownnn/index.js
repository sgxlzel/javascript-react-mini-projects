const decreaseBtn = document.getElementById("decreasetBtn");
const increaseBtn = document.getElementById("increasetBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;


increaseBtn.onclick = () => {
    count++;
    countLabel.innerText = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.innerText = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.innerText = count;
}