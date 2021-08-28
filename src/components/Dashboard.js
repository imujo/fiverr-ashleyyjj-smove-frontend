import React, { useEffect, useRef, useState } from 'react'
import Nav from './Nav'
import { useMediaQuery } from 'react-responsive'

import { useParams } from "react-router-dom";
import Listings from '../pages/Listings';
import Viewings from '../pages/Viewings';
import Account from '../pages/Account';
import { FiMenu } from "react-icons/fi";
import {useHistory} from 'react-router-dom';
import { fetchUser } from '../functions/authFunctions';



const Dashboard = () => {


    const { page } = useParams()
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const menu = useRef()
    const history = useHistory();
    const [fName, setFName] = useState('')

    const isPhone = useMediaQuery({query: '(max-width: 900px)'})
    
    

    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (menuIsOpen && menu.current && !menu.current.contains(e.target)) {
            setMenuIsOpen(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [menuIsOpen])

    const rerout = (route) => {
        history.push(route)

        setTimeout(()=> setMenuIsOpen(false), 50)
    }

    useEffect(() => {
        fetchUser()
            .then(user =>  {
                setFName(user.firstname)

                if (user.movingwith === null){
                    history.push('/usersetup')
                }else if (user.ratingoption1 === null){
                    history.push('/ratingsetup')
                }
            })

        
    }, [history])
    

    const logOut = () => {
        localStorage.removeItem('jwtToken')
        localStorage.setItem('isAuth', false)
        history.push('/signup')

    }
    
 


    return (
        <main className='dashboard'>
            <Nav>

                {
                    isPhone ? 
                        <FiMenu onClick={()=> setMenuIsOpen(true)} style={{cursor: 'pointer'}} />
                    : 
                    <>
                        <button className='btn btn-outline btn-outline-orange dashboard__nav-button' onClick={logOut}>Log out</button>
                        <div className="dashboard__personIcon">JA</div>
                    </>
                }
            </Nav>
            <hr className="dashboard__hline"/>

            <div className="dashboard__content">
                <h1 className='dashboard__title'>Welcome back, {fName}!</h1>
                <h4 className='dashboard__subtitle'>Let’s get your smove on</h4>

                <div className="dashboard__buttons">
                    <button className='btn btn-hover btn-fill btn-fill-orange btn-flexible dashboard__buttons__button'>Find ways to rate homes {'>'}</button>
                    <button className='btn btn-hover btn-outline btn-outline-orange btn-outline-orange-disabled btn-flexible dashboard__buttons__button'>Manage home ratings {'>'}</button>
                </div>

                
                <ul className='dashboard__routes' ref={isPhone ? menu : undefined} isopen={`${menuIsOpen}`} >
                    { isPhone ? <div className="dashboard__personIcon">JA</div> : null}
                    <li 
                        className={`
                            dashboard__routes__route 
                            ${page === 'listings' ? 'dashboard__routes__route-active' : ''}
                        `}
                        onClick={()=> rerout('/listings')}
                    >Listing Ratings
                    </li>
                    <li className={`dashboard__routes__route ${page === 'viewings' ? 'dashboard__routes__route-active' : ''}`} onClick={()=> rerout('/viewings')}>
                        Viewings
                    </li>
                    <li className={`dashboard__routes__route ${page === 'account' ? 'dashboard__routes__route-active' : ''}`} onClick={()=> rerout('/account')}>
                        Account
                    </li>
                </ul>
                {
                    isPhone ? <div className="dashboard__routes__shadow" isopen={`${menuIsOpen}`}></div> : null
                }
          

                
                { page === 'listings' ? <Listings /> : null }
                { page === 'viewings' ? <Viewings /> : null }
                { page === 'account' ? <Account /> : null }
                    
                

            </div>
            <div className="dashboard__footer">smove</div>
        </main>
    )
}

export default Dashboard;
