import React, { useState } from 'react'
import Nav from '../components/Nav'
import SetupSidebar from '../components/SetupSidebar'

const UserSetup = () => {

    const [imA, setImA] = useState('')
    const [movingWith, setMovingWith] = useState('')
    const [budget, setBudget] = useState(0)

    const [submited, setsubmited] = useState(false)


    const submit = () => {
        setsubmited(true)
        console.log(!imA, !movingWith, !budget)
        if (!imA || !movingWith || !budget){
            console.log('You didnt fill all fields')
        }
        setTimeout(()=> setsubmited(false), 3000)
    }
    

    return (
        <div>
            <Nav></Nav>
            <div className="setup__page">
                <div className="setup__page__body">
                    <SetupSidebar />

                    <div className="userSetup setup">
                        <h1 className='setup__title userSetup__title' >What type of homemover are you?</h1>
                        <h2 className='setup__subtitle userSetup__subtitle'>Tell us a little bit more about your move so we can help you with relevant information and a personalised dashboard.</h2>

                        <div className="userSetup__form">

                            <p className={` userSetup__form__label ${submited && !imA ? 'userSetup__form__label-error' : ''}`}>I am a:</p>
                            <div className="userSetup__form__section">
                                <button 
                                    className={`userSetup__form__button setup__button setup__button-secondary ${imA === 'First time buyer' ? 'setup__button-secondary-active' : ''}`}
                                    onClick={()=> setImA('First time buyer')}
                                    >First time buyer</button>
                                <button 
                                    className={`userSetup__form__button setup__button setup__button-secondary ${imA === 'Home buyer' ? 'setup__button-secondary-active' : ''}`}
                                    onClick={()=> setImA('Home buyer')}
                                    >Home buyer</button>
                                <button 
                                    className={`userSetup__form__button setup__button setup__button-secondary ${imA === 'Renter' ? 'setup__button-secondary-active' : ''}`}
                                    onClick={()=> setImA('Renter')}
                                    >Renter</button>
                            </div>

                            <p className={`userSetup__form__label ${submited && !movingWith ? 'userSetup__form__label-error' : ''}`}>Are you moving in with anyone?</p>
                            <div className="userSetup__form__section">
                                <button 
                                    className={`userSetup__form__button setup__button setup__button-secondary ${movingWith === 'By myself' ? 'setup__button-secondary-active' : ''}`}
                                    onClick={()=> setMovingWith('By myself')}
                                    >By myself</button>
                                <button 
                                    className={`userSetup__form__button setup__button setup__button-secondary ${movingWith === 'Partner' ? 'setup__button-secondary-active' : ''}`}
                                    onClick={()=>  setMovingWith('Partner')}
                                    >Partner</button>
                                <button 
                                    className={`userSetup__form__button setup__button setup__button-secondary ${movingWith === 'Friends' ? 'setup__button-secondary-active' : ''}`}
                                    onClick={()=> setMovingWith('Friends')}
                                    >Friends</button>
                            </div>

                            <p className={`userSetup__form__label ${submited && !budget ? 'userSetup__form__label-error' : ''}`}>Set your max budget</p>
                            <div className="userSetup__form__section userSetup__form__section-budget">
                                <i>£</i>
                                <input type="number" className='userSetup__form__budget' value={budget} onChange={(e)=> setBudget(e.target.value)} />
                            </div>
                            
                            <button 
                                className='userSetup__form__button setup__button setup__button-primary userSetup__form__submit'
                                onClick={submit}
                                >Next, set up preferences</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserSetup
