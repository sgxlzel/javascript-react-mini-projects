const maxnum = 100;
const minnum = 1;
const answer = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;

let attempts = 0;
let guessed = false;
let running = true;

while(running){
    const input = prompt(`Guess a number between ${minnum} and ${maxnum}:`);
    const guess = Number(input);

    if(isNaN(guess) || guess < minnum || guess > maxnum){
        alert(`Please enter a valid number between ${minnum} and ${maxnum}.`);
        continue;
    }
    else {
        attempts++;
        if(guess > answer){
            alert("Too high! Try again.");
        }
        else if(guess < answer){
            alert("Too low! Try again.");
        }
        else{
            alert(`Correct! You guessed the number in ${attempts} attempts.`);
            running = false;
        }
    }
   
}