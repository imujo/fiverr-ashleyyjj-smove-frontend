import React, { useEffect, useState } from 'react'
import { commify, onlyNumbers } from '../functions/otherFunctions'

const UserSetupForm = ({ ima, movingwith, budget, setima, setmovingwith, setbudget }) => {

    const submited = false
    const [commaValue, setCommaValue] = useState('')

    useEffect(() => {
        setCommaValue(commify(budget))
    }, [budget])


    return (
        <div className="userSetup__form">

            <p className={` userSetup__form__label ${submited && !ima ? 'userSetup__form__label-error' : ''}`}>I am a:</p>
            <div className="userSetup__form__section">
                <button 
                    className={`userSetup__form__button btn btn-fill btn-fill-blue ${ima === 'First time buyer' ? 'btn-fill-blue-active' : ''}`}
                    onClick={()=> setima('First time buyer')}
                    >First time buyer</button>
                <button 
                    className={`userSetup__form__button btn btn-fill btn-fill-blue ${ima === 'Home buyer' ? 'btn-fill-blue-active' : ''}`}
                    onClick={()=> setima('Home buyer')}
                    >Home buyer</button>
                <button 
                    className={`userSetup__form__button btn btn-fill btn-fill-blue ${ima === 'Renter' ? 'btn-fill-blue-active' : ''}`}
                    onClick={()=> setima('Renter')}
                    >Renter</button>
            </div>

            <p className={`userSetup__form__label ${submited && !movingwith ? 'userSetup__form__label-error' : ''}`}>Are you moving in with anyone?</p>
            <div className="userSetup__form__section">
                <button 
                    className={`userSetup__form__button btn btn-fill btn-fill-blue ${movingwith === 'By myself' ? 'btn-fill-blue-active' : ''}`}
                    onClick={()=> setmovingwith('By myself')}
                    >By myself</button>
                <button 
                    className={`userSetup__form__button btn btn-fill btn-fill-blue ${movingwith === 'Partner' ? 'btn-fill-blue-active' : ''}`}
                    onClick={()=>  setmovingwith('Partner')}
                    >Partner</button>
                <button 
                    className={`userSetup__form__button btn btn-fill btn-fill-blue ${movingwith === 'Friends' ? 'btn-fill-blue-active' : ''}`}
                    onClick={()=> setmovingwith('Friends')}
                    >Friends</button>
            </div>

            <p className={`userSetup__form__label ${submited && !budget ? 'userSetup__form__label-error' : ''}`}>Set your max budget</p>
            <div className="userSetup__form__section userSetup__form__section-budget">
                <i>£</i>
                <input type="text" className='userSetup__form__budget' value={commaValue} onChange={(e)=> {setbudget(onlyNumbers(e.target.value)); setCommaValue(commify(e.target.value))}} />
            </div>
            
        </div>
    )
}

export default UserSetupForm
