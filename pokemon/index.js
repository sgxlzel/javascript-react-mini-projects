


async function fetchdata(){
    try{
        const pokemonname = document.getElementById("pokemonname").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
        
        if (!response.ok) {
            throw new Error(`could not fetch resourse`);
        }
        const data = await response.json();
        const spriteUrl = data.sprites.front_default;
        const pokemonSprite = document.getElementById("pokemonsprite");

        pokemonSprite.src = spriteUrl;
        pokemonSprite.style.display = "block";
        pokemonSprite.style.width = "300px";


    } catch (error) {
        console.error("Error fetching Pokemon data:", error);
    }
}
        