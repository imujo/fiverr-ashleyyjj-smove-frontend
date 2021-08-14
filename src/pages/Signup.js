import React from 'react'
import Nav from '../components/Nav'
import SetupSidebar from '../components/SetupSidebar'

const Signup = () => {
    return (
        <div>
            <Nav>
                <button className='nav__button'>Login</button>
            </Nav>
            <div className="setupPage">
                <div className="setupPage__body">
                    <SetupSidebar />
                    <div className="signup">
                        <h1 className="signup__title">Hey, let's get started</h1>
                        <h2 className='signup__subtitle'>Create an account in just a few steps.</h2>
                        <form className='signup__form'>
                            <div className="signup__form__section">
                                <div className="signup__form__item signup__form__item-narrow">
                                    <label htmlFor="fname" className='signup__form__label'>First name</label>
                                    <input type="text" className='signup__form__input' />
                                </div>
                                <div className="signup__form__item signup__form__item-narrow">
                                    <label htmlFor="fname" className='signup__form__label'>Last name</label>
                                    <input type="text" className='signup__form__input' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
