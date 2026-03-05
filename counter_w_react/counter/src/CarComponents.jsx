import React, {useState} from "react";

function CarComponents(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };
        setCars([...cars, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleCarYearChange(event){
        setCarYear(event.target.value);
    }
    function handleCarMakeChange(event){
        setCarMake(event.target.value);
    }
    function handleCarModelChange(event){
        setCarModel(event.target.value);
    }
    function handleremoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }



    return(

        <div>
            <h2>Car List</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleremoveCar(index)}>
                    {car.year} {car.make} {car.model}</li>
                ))}
            </ul>

            <input type="number" value={carYear} onChange={handleCarYearChange} /> <br/>
            <input type="text" value={carMake} onChange={handleCarMakeChange} 
            placeholder="Enter Car Make" /> <br/>
            <input type="text" value={carModel} onChange={handleCarModelChange} 
            placeholder="Enter Car Model" /> <br/>
            <button onClick={handleAddCar}>Add Car</button> <br/>
        </div>
    )
}
export default CarComponents;    