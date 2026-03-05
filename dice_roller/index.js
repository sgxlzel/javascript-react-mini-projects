function rolldice() {
    let diceCount = document.getElementById("diceCount").value;
    let diceResults = document.getElementById("diceResults");
    let diceimg = document.getElementById("diceimg");
    const values = [];
    const images = [];

    for (let i = 0; i < diceCount; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src ="dice_images/${value}.png" alt="Dice ${value}" width="50" height="50">`);

    }
    diceResults.innerHTML = "You rolled: " + values.join(", ");
    diceimg.innerHTML = images.join(" ");
}
