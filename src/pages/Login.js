import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import SetupSidebar from '../components/SetupSidebar'
import { useHistory } from "react-router-dom";
import { logIn } from '../functions/authFunctions'
import { ReloadStateContext } from '../state/ReloadState'


const Login = () => {

    let history = useHistory();

    const [email, setEmail] = useState('')
    const [pswrd, setPswrd] = useState('')

    const { alertGlobal } = useContext(ReloadStateContext);
    const [, addAlert] = alertGlobal;




    const submit = () => {

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
                                onClick={()=> submit(true)}
                            />

                        </form>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
