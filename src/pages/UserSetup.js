import React from 'react'
import Nav from '../components/Nav'
import SetupSidebar from '../components/SetupSidebar'

const UserSetup = () => {
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

                            <p className='userSetup__form__label'>I am a:</p>
                            <div className="userSetup__form__section">
                                <button className='userSetup__form__button setup__button setup__button-secondary'>First time buyer</button>
                                <button className='userSetup__form__button setup__button setup__button-secondary'>Home buyer</button>
                                <button className='userSetup__form__button setup__button setup__button-secondary'>Renter</button>
                            </div>

                            <p className='userSetup__form__label'>Are you moving in with anyone?</p>
                            <div className="userSetup__form__section">
                                <button className='userSetup__form__button setup__button setup__button-secondary'>By myself</button>
                                <button className='userSetup__form__button setup__button setup__button-secondary'>Partner</button>
                                <button className='userSetup__form__button setup__button setup__button-secondary'>Friends</button>
                            </div>

                            <p className='userSetup__form__label'>Set your max budget</p>
                            <div className="userSetup__form__section userSetup__form__section-budget">
                                <i>£</i>
                                <input type="number" className='userSetup__form__budget' />
                            </div>
                            
                            <button className='userSetup__form__button setup__button setup__button-primary userSetup__form__submit'>Next, set up preferences</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserSetup
