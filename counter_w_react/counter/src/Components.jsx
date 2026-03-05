import React, {useState} from "react";

function Components(){
    const [food, setFood] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood(){

        const newFood = document.getElementById("newFood").value;
        
        document.getElementById("newFood").value = "";

        setFood(f => [...f, newFood]);
    }

    return(
        <div>
            <h2>My Favorite Foods</h2>
            <ul>
                {food.map((f, index) => <li key={index}>{f}</li>)}
            </ul>
            <input type="text" id="newFood" placeholder="Add a new food" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}