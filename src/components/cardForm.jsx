import React from "react";

import '../sass/cardForm.css';

function CardForm(){
    return(
        <form className="CardForm">
            <label htmlFor='cardholderName'>CARDHOLDER NAME
            <input type="text" placeholder='e.g. Jane Appleseed' name="cardholderName" id='cardholderName' required='' value=""/>
            </label>
            <label htmlFor='cardNumber'>CARD NUMBER
            <input type="number" placeholder='e.g. 1234 5678 9123 0000' name="cardNumber" id="cardNumber" required='' value=""/>
            </label>
            <div className="GoupForm">
                <label htmlFor='month'>EXP. DATE (MM/YY)
                    <div className="date">
                        <input type="number" placeholder='MM' name="month" id='month' required='' value=""/>
                        <input type="number" placeholder='YY' name="year" required='' value=""/>
                    </div>
                </label>
                <label htmlFor='cvc'>CVC
                    <div>
                        <input type="number" placeholder='e.g. 123' name="cvc" id="cvc" required='' value=""/>
                    </div>
                </label>
            </div>
            <button className="ButtonConfirm" type="submit"> Confirm </button>
        </form>
    )
}

export default CardForm;