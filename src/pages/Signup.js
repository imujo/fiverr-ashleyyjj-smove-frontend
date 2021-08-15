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
                            <div className="signup__form__inputsection">
                                <div className="signup__form__item signup__form__item-narrow">
                                    <label htmlFor="fname" className='signup__form__label'>First name</label>
                                    <input type="text" className='signup__form__input' />
                                </div>
                                <div className="signup__form__item signup__form__item-narrow">
                                    <label htmlFor="fname" className='signup__form__label'>Last name</label>
                                    <input type="text" className='signup__form__input' />
                                </div>
                            </div>
                            <div className="signup__form__item">
                                <label htmlFor="fname" className='signup__form__label'>Email</label>
                                <input type="text" className='signup__form__input' />
                            </div>
                            <div className="signup__form__inputsection signup__form__inputsection-password">
                                <div className="signup__form__item signup__form__item-narrow">
                                    <label htmlFor="fname" className='signup__form__label'>Password</label>
                                    <input type="text" className='signup__form__input' />
                                </div>
                                <div className="signup__form__requirementssection">
                                    <div className="signup__form__requirementsitem signup__form__requirementsitem-active">
                                        <div className="signup__form__radiobutton"></div>
                                        <p>Contain uppercase letter</p>
                                    </div>
                                    <div className="signup__form__requirementsitem">
                                        <div className="signup__form__radiobutton"></div>
                                        <p>Contain lowercase letter</p>
                                    </div>
                                    <div className="signup__form__requirementsitem">
                                        <div className="signup__form__radiobutton"></div>
                                        <p>Contain a number</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className='signup__heading'>Receive Email updates?</h3>
                            <p className='signup__text'>Receive checklists, information on home services for when you move and monthly updates.</p>

                            <input className='signup__form__submit signup__form__submit-primary' type="submit" value="Yes, get started now" />

                            <input className='signup__form__submit signup__form__submit-secondary' type="submit" value="No thanks, get started now" />
                        </form>

                        <p className='signup__text-small'>By clicking get started, you agree to smove’s <span className='hyperlink'>Terms of Use</span>, <span className='hyperlink'>Cookies</span>  and <span className='hyperlink'>Privacy Policy</span>.</p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
