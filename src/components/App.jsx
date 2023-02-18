import React, {useState, useRef}  from 'react';
import '../sass/app.css';


import {FrontCard} from './frontCard.jsx';
import {BackCard} from './backCard.jsx';
/* import CardForm from './cardForm.jsx'; */

function App() {
  //variables
  let form;

  //states
  const [cardName, setCardName] = useState(['JANE APPLESEED']);
  const [cardNumber, setCardNumber] = useState(['1234 5678 9123 0000']);
  const [monthExp, setMonthExp] = useState(['01']);
  const [yearExp, setYearExp] = useState(['25']);
  const [CVC, setCVC] = useState(['123']);
  const [card, setCard]= useState([])
  const [cardAdded, setCardAdded]= useState([false])

  //refs
  const cardNameRef = useRef();
  const cardNumberRef = useRef();
  const monthExpRef = useRef();
  const yearExpRef = useRef();
  const cvcRef = useRef();


  function updateCardName(){
    let name = cardNameRef.current.value
    if (name === '') return
    let upperName = name.toUpperCase();
    
    setCardName(()=>{
      return [upperName]
    })
  };
  function updateCardNumber(){
    let number = cardNumberRef.current.value;
    if (number === '') return;
    
    let cadena = addSpace(number , ' ' , 4)

    setCardNumber(()=>{
      return[cadena]
    })
  };

  const addSpace = (cadena, caracter, pasos)=>{
    let cadenaConEspacios = '';
    const longitud = cadena.length
    for (let i = 0; i<longitud; i+=pasos){
      if (i+pasos< longitud){
        cadenaConEspacios+= cadena.substring(i,i+pasos)+ caracter;
      }
      else{
        cadenaConEspacios+= cadena.substring(i, longitud);
      }
    }
    return cadenaConEspacios;
  }

  function updateMonthExp(){
    let month = monthExpRef.current.value;
    if (month === '') return;

    setMonthExp(()=>{
      return[month]
    })
  };

  function updateYearExp(){
    let year = yearExpRef.current.value;
    if (year === '') return;

    setYearExp(()=>{
      return[year]
    })
  };
  function updateCVC(){
    let cvc = cvcRef.current.value;
    if (cvc === '') return;

    setCVC(()=>{
      return [cvc]
    })
  };

  function confirmCard(){
    addCard();
  };

  function validarSubmit(){
    if(cardNameRef.current.validity.valid &&
      cardNumberRef.current.validity.valid &&
      monthExpRef.current.validity.valid &&
      yearExpRef.current.validity.valid &&
      cvcRef.current.validity.valid){
        confirmCard()
      }
  }

  function addCard(){
    let name = cardNameRef.current.value;
    let number = cardNumberRef.current.value;
    let month = monthExpRef.current.value;
    let year = yearExpRef.current.value;
    let cvc = cvcRef.current.value;

    setCard((prevCards)=>{
      return[[...prevCards],{nameCard:name, numberCard:number, monthExp:month, yearExp:year, cvc:cvc}]
    })
    setCardAdded(()=>{
      return[true]
    })
  }

  function addOther(){
    resetCard();
    setCardAdded(()=>{
      return[false]
    })
  }
  function resetCard(){
    setCardName(()=>{
      return['JANE APPLESEED']
    })
    setCardNumber(()=>{
      return['1234 5678 9123 0000']
    })
    setMonthExp(()=>{
      return['01']
    })
    setYearExp(()=>{
      return['25']
    })
    setCVC(()=>{
      return['123']
    })
  };

  if (cardAdded[0]){
    form = 
    <div className="ConfirmedCard">
      <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
      <div>
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
      </div>
      <button onClick={addOther}>Continue</button>
    </div>
  } else{
    form =  
    <form className="CardForm">
          <label htmlFor='cardholderName'>CARDHOLDER NAME
          <input ref={cardNameRef} type="text" placeholder='e.g. Jane Appleseed' name="cardholderName" /* id='cardholderName' */ required='required' onChange={updateCardName}/>
          </label>
          <label htmlFor='cardNumber'>CARD NUMBER
          <input ref={cardNumberRef} type="number" max="9999999999999999" placeholder='e.g. 1234 5678 9123 0000' name="cardNumber" id="cardNumber" required='required' onChange={updateCardNumber}/>
          </label>
          <div className="GoupForm">
              <label htmlFor='month'>EXP. DATE (MM/YY)
                  <div className="date">
                      <input ref={monthExpRef} min="1" max="12" type="number" placeholder='MM' name="month" id='month' required='required' onChange={updateMonthExp}/>
                      <input ref={yearExpRef} min="23" max="99" type="number" placeholder='YY' name="year" required='required' onChange={updateYearExp}/>
                  </div>
              </label>
              <label htmlFor='cvc'>CVC
                  <div>
                      <input ref={cvcRef} max="999" type="number" placeholder='e.g. 123' name="cvc" id="cvc" required='required' onChange={updateCVC}/>
                  </div>
              </label>
          </div>
          <button className="ButtonConfirm" type="submit" onClick={validarSubmit}> Confirm </button>
        </form>
  }

  return (
    <div className="app">
      <div className='ContainerCard'>
        <FrontCard cardName={cardName} cardNumber={cardNumber} monthExp={monthExp} yearExp={yearExp}/>
        <BackCard cvc={CVC}/>
      </div>
      {form}
    </div>
  );
}

export default App;
