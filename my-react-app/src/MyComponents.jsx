import React, {useState} from 'react';

function MyComponents() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();
    const [shipment, setShipment] = useState();

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShipmentChange(event) {
        setShipment(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p><br />

            <input value={quantity} onChange={handleQuantityChange} type='number'/>
            <p>Quantity: {quantity}</p><br />

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter Delivery Instructions'/>
            <p>Comment: {comment}</p><br />

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select a Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick-Up" 
                checked={shipment === "Pick-Up"}
                onChange={handleShipmentChange}/>
                Pick-Up
            </label><br />
            <label>
                <input type="radio" value="Delivery" 
                checked={shipment === "Delivery"}
                onChange={handleShipmentChange}/>
                Delivery
            </label>
            <p>Delivery: {shipment}</p>
        </div>
    );
    
}

export default MyComponents;