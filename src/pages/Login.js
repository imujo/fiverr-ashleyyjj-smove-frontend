import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import SetupSidebar from '../components/SetupSidebar'
import { useHistory } from "react-router-dom";
import { logIn, reqPasswordReset } from '../functions/authFunctions'
import { ReloadStateContext } from '../state/ReloadState'


const Login = () => {

    let history = useHistory();

    const [email, setEmail] = useState('')
    const [pswrd, setPswrd] = useState('')

    const { alertGlobal } = useContext(ReloadStateContext);
    const [, addAlert] = alertGlobal;




    const submit = (e) => {
        e.preventDefault()

        logIn(email, pswrd)
            .then(res => {
                if (res.isSuccess){
                    history.push('/')
                }else{
                    addAlert(res.msg, 'error')
                }
            })
            .catch(err => console.log(err))

    }

    const forgotPassword = (e) => {
        e.preventDefault()

        const emailValid = email.length > 0 && email.includes('@')
        
        if (!emailValid) { 
            return addAlert('The email is not valid. To reset your password, enter a valid email and click on the "Reset password" link', 'error')
        }

        if (reqPasswordReset(email)) { addAlert('Reset password link is sent to your email', 'success') }
        else ( addAlert('There has been an error sending your reset email', 'error') )
    }
    
    

    return (
        <div>
            <Nav>
                <button className='nav__button' onClick={()=> history.push('/signup')}>Sign up</button>
            </Nav>
            <div className="setup__page">
                <div className="setup__page__body">

                    <SetupSidebar />


                    <div className="signup setup">
                        <h1 className="setup__title">Log into your account</h1>
                        <h2 className='setup__subtitle'>Get to your dashboard and start organizing homes.</h2>



                        <form className='signup__form signup__form-center'>
                            
                            <div className={`signup__form__item signup__form__item`}>
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
                            <div className={`signup__form__item signup__form__item`}>
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

                            
                            
                            

                            <input 
                                className='btn btn-fill btn-fill-orange btn-shadow signup__form__submit' 
                                type="submit" 
                                value="Head to your dashboard" 
                                onClick={(e)=> submit(e)}
                            />

                            <button className='signup__form__resetPassword' onClick={e => forgotPassword(e)} > Reset password - type in your email and click on this link </button>

                            
                        </form>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
