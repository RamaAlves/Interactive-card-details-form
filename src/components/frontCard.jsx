import React from "react";

import '../sass/card.css';

export function FrontCard({cardName, cardNumber, monthExp, yearExp }){
    return(
        <div className="FrontCard">
            <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
            <p className="numberCard">{
                cardNumber
            }
            </p>
            <div className="flex-name-date-card">
                <p>{cardName}</p>
                <div className="date-card">
                    <p>{monthExp}</p><p>/</p><p>{yearExp}</p>
                </div>
            </div>
        </div>
    )
}