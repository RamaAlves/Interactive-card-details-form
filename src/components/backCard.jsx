import React from "react";

import '../sass/card.css';

export function BackCard({cvc}){
    return(
        <div className="BackCard">
            <div className="cvc">
                <p>{cvc}</p>
            </div>
        </div>
    )
}
