import React, {useState, useRef, useEffect}  from 'react';
import '../sass/app.css';


import {FrontCard} from './frontCard.jsx';
import {BackCard} from './backCard.jsx';
/* import CardForm from './cardForm.jsx'; */

function App() {
  //constantes
  const regex = /^[0-9]*$/;
  const cardRegex = /^[0-9\s]*$/;
  //variables
  let form;

  let [errorName, setErrorName]= useState([false]);
  let [errorCardNumber, setErrorCardNumber] = useState([false]);
  let [errorDate, setErrorDate] = useState([false]);
  let [errorCvc, setErrorCvc]= useState([false]);

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
    // validarName(cardName)
    // updateForm()
  };
  
  function validarName(name){
  
    if (name.length>1) {
      setErrorName(()=>{
        return [false]
      })
      return false
    } else{
      setErrorName(()=>{
        return [true]
      })
      return true
    }
  }

  function updateCardNumber(){
    let number = cardNumberRef.current.value;
    if (number === '') return;
    
    let cadena = addSpace(number , ' ' , 4)

    setCardNumber(()=>{
      return[cadena]
    })
    // validarCardNumber(cardNumber)
    // updateForm()
  };

  function validarCardNumber(number){
    let onlyNumbers = cardRegex.test(number); // Devuelve true si todos los caracteres son numeros
    if (onlyNumbers && number!==''&& number[0].length>=16){
      setErrorCardNumber(()=>{
        return [false]
      })
      return false
    }else{
      setErrorCardNumber(()=>{
        return[true]
      })
      return true
    }
  }

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
    // validarDate(monthExp)
    // updateForm()
  };

  function updateYearExp(){
    let year = yearExpRef.current.value;
    if (year === '') return;

    setYearExp(()=>{
      return[year]
    })
    // validarDate(yearExp)
    // updateForm()
  };

  function validarDate(date){
    let onlyNumbers = regex.test(date) //devuelve true si todos los caracteres son numeros
    if (onlyNumbers && date!==''){
      setErrorDate(()=>{
        return[false]
      })
      return false
    }else{
      setErrorDate(()=>{
        return[true]
      })
      return true
    }
    
  }
  function updateCVC(){
    let cvc = cvcRef.current.value;
    if (cvc === '') return;

    setCVC(()=>{
      return [cvc]
    })
    // validarCvc(cvc)
    // updateForm()
  };

  function validarCvc(cvc){
    let onlyNumbers = regex.test(cvc)
    
    if (onlyNumbers&&cvc!==''){
      setErrorCvc(()=>{
        return[false]
      })
      return false
    }else{
      setErrorCvc(()=>{
        return[true]
      })
    }
    return true
  }

  function confirmCard(){
    addCard();
  };

  function validarSubmit(e){
    e.preventDefault();
    validarName(cardNameRef.current.value);
    validarCardNumber(cardNumberRef.current.value);
    validarDate(monthExpRef.current.value);
    validarDate(yearExpRef.current.value);
    validarCvc(cvcRef.current.value);
    if(
      !validarName(cardNameRef.current.value) &&
      !validarCardNumber(cardNumber) &&
      !validarDate(monthExpRef.current.value) &&
      !validarDate(yearExpRef.current.value) &&
      !validarCvc(cvcRef.current.value)
    ){
      if(cardNameRef.current.validity.valid &&
        cardNumberRef.current.validity.valid &&
        monthExpRef.current.validity.valid &&
        yearExpRef.current.validity.valid &&
        cvcRef.current.validity.valid){
          confirmCard()
        }
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
    updateForm()
  }

  function addOther(){
    resetCard();
    setCardAdded(()=>{
      return[false]
    })
    updateForm()
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

  function updateForm() {
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
      <form className="CardForm" onSubmit={validarSubmit}>
            <label htmlFor='cardholderName'>CARDHOLDER NAME
              <input ref={cardNameRef} type="text" placeholder='e.g. Jane Appleseed' name="cardholderName"  /* required='required' */ onChange={updateCardName}/>
              {errorName[0] && <small>Can't be blank and must contain at least 2 letters</small>}
            </label>
            <label htmlFor='cardNumber'>CARD NUMBER
              <input ref={cardNumberRef} type="number" max="9999999999999999" placeholder='e.g. 1234 5678 9123 0000' name="cardNumber" id="cardNumber" /* required='required' */ onChange={updateCardNumber}/>
              {errorCardNumber[0] && <small>Wrong format, numbers only or must contain at least 16 numbers.</small>}
            </label>
            <div className="GoupForm">
                <label htmlFor='month'>EXP. DATE (MM/YY)
                    <div className="date">
                        <input ref={monthExpRef} min="1" max="12" type="number" placeholder='MM' name="month" id='month' /* required='required' */ onChange={updateMonthExp}/>
                        <input ref={yearExpRef} min="23" max="99" type="number" placeholder='YY' name="year" /* required='required' */ onChange={updateYearExp}/>
                    </div>
                    {errorDate[0] && <small>Can't be blank and only numbers</small>}
                </label>
                <label htmlFor='cvc'>CVC
                    <div>
                        <input ref={cvcRef} max="999" type="number" placeholder='e.g. 123' name="cvc" id="cvc" /* required='required' */ onChange={updateCVC}/>
                    </div>
                    {errorCvc[0] && <small>Can't be blank and only numbers</small>}
                </label>
            </div>
            <button className="ButtonConfirm" type="submit"> Confirm </button>
          </form>
    }
  }
  updateForm()


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
