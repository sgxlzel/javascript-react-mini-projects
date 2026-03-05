import React, {useState} from 'react';
function MyComponents(){
    const [name, setName] = useState("");
    // const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const[payment, setPayment] = useState("cash");


    function handleNameChange(event){
         setName(event.target.value);

    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    return(
        <div>
            <h1>My Components</h1>
            <input value ={name} onChange={handleNameChange} placeholder="Enter your name"/>
            <p>Name: {name}</p>
            <br/>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter your comment"/>
            <br/>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="cash">Cash</option>
                <option value="credit">Credit Card</option>
                <option value="paypal">PayPal</option>
            </select>
                <p>Payment Method: {payment}</p>
        </div>
    );

}
export default MyComponents;