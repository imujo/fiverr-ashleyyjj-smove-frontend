import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import SetupSidebar from '../components/SetupSidebar'

const Signup = () => {

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [pswrd, setPswrd] = useState('')

    const [containUpper, setContainUpper] = useState(false)
    const [longEnough, setLongEnough] = useState(false)
    const [containNumber, setContainNumber] = useState(false)
    const [submited, setSubmited] = useState(false)


    useEffect(() => {
        pswrd.length >= 6 ? setLongEnough(true) : setLongEnough(false)

        let regExNumber = new RegExp('(?=.*[0-9])')
        let regExLetters = new RegExp('(?=.*[A-Z])')

        regExNumber.test(pswrd) ? setContainNumber(true) : setContainNumber(false)
        regExLetters.test(pswrd) ? setContainUpper(true) : setContainUpper(false)
    }, [pswrd])

    const submit = (e) => {
        e.preventDefault();

        setSubmited(true)
        setTimeout(()=> setSubmited(false), 3000)
    }
    

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



                        <form className='signup__form' onSubmit={submit}>
                            <div className="signup__form__inputsection">

                                <div className={`signup__form__item signup__form__item-narrow ${(submited && !fName) ? 'signup__form__error' : ''}`}>
                                    <label 
                                        htmlFor="fname" 
                                        className='signup__form__label'
                                    >First name</label>
                                    <input 
                                        type="text"  
                                        className='signup__form__input'
                                        value={fName}
                                        onChange={e=> setFName(e.target.value)} 
                                    />
                                </div>

                                <div className={`signup__form__item signup__form__item-narrow ${(submited && !lName) ? 'signup__form__error' : ''}`}>
                                    <label 
                                        htmlFor="lname" 
                                        className='signup__form__label'
                                    >Last name</label>
                                    <input 
                                        type="text" 
                                        className='signup__form__input'
                                        id='lname' 
                                        value={lName}
                                        onChange={e=> setLName(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className={`signup__form__item ${(submited && !email) ? 'signup__form__error' : ''}`}>
                                <label 
                                    htmlFor="email" 
                                    className='signup__form__label'
                                > Email </label>
                                <input 
                                    type="text" 
                                    className='signup__form__input' 
                                    id='email'
                                    value={email}
                                    onChange={e=> setEmail(e.target.value)}
                                />
                            </div>
                            <div className="signup__form__inputsection signup__form__inputsection-password">
                                <div className={`signup__form__item signup__form__item-narrow ${(submited && !pswrd && !containNumber && !containUpper && !longEnough) ? 'signup__form__error' : ''}`}>
                                    <label 
                                        htmlFor="password" 
                                        className='signup__form__label'
                                    >Password</label>
                                    <input 
                                        type="password" 
                                        id='password' 
                                        className='signup__form__input' 
                                        value={pswrd}
                                        onChange={e=> setPswrd(e.target.value)}
                                    />
                                </div>
                                <div className="signup__form__requirementssection">
                                    <div className={`signup__form__requirementsitem ${containUpper ? 'signup__form__requirementsitem-active' : ''}  ${submited && !containUpper ? 'signup__form__error' : ''}`}>
                                        <div className="signup__form__radiobutton"></div>
                                        <p>Contains uppercase letter</p>
                                    </div>
                                    <div className={`signup__form__requirementsitem ${longEnough ? 'signup__form__requirementsitem-active' : ''} ${submited && !longEnough ? 'signup__form__error' : ''} `}>
                                        <div className="signup__form__radiobutton"></div>
                                        <p>Longer than 6 char.</p>
                                    </div>
                                    <div className={`signup__form__requirementsitem ${containNumber ? 'signup__form__requirementsitem-active' : ''} ${submited && !containNumber ? 'signup__form__error' : ''}`}>
                                        <div className="signup__form__radiobutton"></div>
                                        <p>Contains a number</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className='signup__heading'>Receive Email updates?</h3>
                            <p className='signup__text'>Receive checklists, information on home services for when you move and monthly updates.</p>

                            <input className='signup__form__submit signup__form__submit-primary' type="submit" value="Yes,get started now" />

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