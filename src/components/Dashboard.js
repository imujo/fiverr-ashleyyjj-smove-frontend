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
import Admin from '../pages/Admin';
import ReactGA from 'react-ga'



const Dashboard = () => {


    const { page } = useParams()
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const menu = useRef()
    const history = useHistory();
    const [fName, setFName] = useState('')
    const [admin, setAdmin] = useState(false)
    const [userInitials, setUserInitials] = useState('')

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
                setAdmin(user.admin)
                setFName(user.firstname)
                const initials = user.firstname[0] + user.lastname[0]
                setUserInitials(initials)

                if (user.movingwith === null){
                    history.push('/usersetup')
                }else if (user.ratingoption1 === null){
                    history.push('/ratingsetup')
                }
            })

        
    }, [history])
    

    const logOut = () => {

        reactGaEvent('Log_Out')

        localStorage.removeItem('jwtToken')
        localStorage.setItem('isAuth', false)
        history.push('/login')

    }

    const reactGaEvent = (event) => {
        
        ReactGA.event({
            category: 'Dashboard',
            action: `DASH_${event}`
        })

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
                        <div className="dashboard__personIcon">{userInitials}</div>
                    </>
                }
            </Nav>
            <hr className="dashboard__hline"/>

            <div className="dashboard__content">
                <h1 className='dashboard__title'>Welcome back, {fName}!</h1>
                <h4 className='dashboard__subtitle'>Let’s get your smove on</h4>

                <div className="dashboard__buttons">
                    <a href="http://mysmove.com/how-to-use"><button className='btn btn-hover btn-fill btn-fill-orange btn-flexible dashboard__buttons__button' onClick={()=> reactGaEvent('How_to_rate')}>Find ways to rate homes {'>'}</button></a>
                    <a href="account"><button className='btn btn-hover btn-outline btn-outline-orange btn-outline-orange-disabled btn-flexible dashboard__buttons__button' onClick={()=> reactGaEvent('Manage_ratings')} >Manage home ratings {'>'}</button></a>
                    
                </div>

                
                <ul className='dashboard__routes' ref={isPhone ? menu : undefined} isopen={`${menuIsOpen}`} >
                    { isPhone ? <div className="dashboard__personIcon">JA</div> : null}
                    <li 
                        className={`
                            dashboard__routes__route 
                            ${page === 'listings' ? 'dashboard__routes__route-active' : ''}
                        `}
                        onClick={()=> {reactGaEvent('Listing_ratings') ;rerout('/listings')}}
                    >Listing Ratings
                    </li>
                    <li className={`dashboard__routes__route ${page === 'viewings' ? 'dashboard__routes__route-active' : ''}`} onClick={()=> {reactGaEvent('Viewings') ;rerout('/viewings')}}>
                        Viewings
                    </li>
                    <li className={`dashboard__routes__route ${page === 'account' ? 'dashboard__routes__route-active' : ''}`} onClick={()=> {reactGaEvent('Account') ;rerout('/account')}}>
                        Account
                    </li>

                    {
                        admin ?
                        <li className={`dashboard__routes__route ${page === 'admin' ? 'dashboard__routes__route-active' : ''}`} onClick={()=> {reactGaEvent('Admin'); rerout('/admin')}}>
                            Admin
                        </li>
                        : undefined
                    }

                </ul>
                {
                    isPhone ? <div className="dashboard__routes__shadow" isopen={`${menuIsOpen}`}></div> : null
                }
          

                
                { page === 'listings' ? <Listings  /> : null }
                { page === 'viewings' ? <Viewings  /> : null }
                { page === 'account' ? <Account  /> : null }
                { page === 'admin' && admin ? <Admin  /> : null }
                    
                

            </div>
            <div className="dashboard__footer" onClick={()=>window.scrollTo(0,0)}>smove</div>
        </main>
    )
}

export default Dashboard;
