import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import SetupSidebar from '../components/SetupSidebar'
import { useHistory, useLocation } from "react-router-dom";
import { passwordReset } from '../functions/authFunctions'
import { ReloadStateContext } from '../state/ReloadState'


const PasswordReset = () => {

    let history = useHistory();

    const [pswrd, setPswrd] = useState('')

    const location = useLocation()

    const { alertGlobal } = useContext(ReloadStateContext);
    const [, addAlert] = alertGlobal;

    const validatePassword = (pswrd) => {

        let regExNumber = new RegExp('(?=.*[0-9])')
        let regExLetters = new RegExp('(?=.*[A-Z])')

        if (pswrd.length >= 6 && regExNumber.test(pswrd) && regExLetters.test(pswrd)){
            return true
        }else{
            return false
        }


    }
    
    
    const submit = (e) => {

        e.preventDefault()
        let query = new URLSearchParams(location.search)
        const userId = query.get('id')
        const reset_token = query.get('token')
        console.log(reset_token, userId)

        if (!validatePassword(pswrd)){
            return addAlert('Invalid password', 'error')
        }else if(!userId || !reset_token){
            return addAlert('Invalid link', 'error')
        }


        passwordReset(userId, reset_token, pswrd)
            .then(() => history.push('/login'))
            .catch(() => addAlert('Could not reset password', 'error'))
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
                        <h1 className="setup__title">Reset your password</h1>
                        <h2 className='setup__subtitle'>Enter your new password and click Submit</h2>



                        <form className='signup__form signup__form-center'>
                            
    
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
                                value="Submit new password" 
                                onClick={(e)=> submit(e)}
                            />

                        </form>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset
