import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import Confetti from '../components/Confetti'
import { useHistory } from "react-router-dom";
import { fetchUser } from '../functions/authFunctions';
import ReactGA from 'react-ga'

const SetupCongrats = () => {

    let history = useHistory();

    useEffect(() => {
        fetchUser()
            .then(user => {
                if (user.movingwith === null){
                    history.push('/usersetup')
                }else if (user.ratingoption1 === null){
                    history.push('/ratingsetup')
                }
            })
    }, [history])


    const goToDashboard = () => {
        ReactGA.event({
            category: 'Signup Jurney',
            action: 'SU4_Dashboard'
        })

        history.push('/')
    }

    const goToWebsites = (website) => {
        ReactGA.event({
            category: 'Signup Jurney',
            action: `SU4_${website}`
        })
    }
    
    


    return (
        <div>
            <Nav></Nav>
            <Confetti />
            <div className="setup__page">
                <div className="setup__page__body">
                    <div className="congrats">
                        <div className="congrats__icon"></div>
                    </div>

                    <div className="setupCongrats setup">
                        <div>
                            <h1 className='setup__title setupCongrats__center'>Congrats, you’re all set to start rating listings!</h1>
                            <h2 className='setup__subtitle setupCongrats__center'>Next time you are on a Rightmove, Zoopla or On the Market listing, your ratings will pop down. You can see & manage your ratings in your smove dashdoard. </h2>

                            <div className="setupCongrats__buttons">
                                <button className='btn btn-fill btn-fill-orange btn-shadow btn-hover setupCongrats__button-primary' onClick={goToDashboard}>Go to dashboard</button>
                                
                                <a href="https://www.rightmove.co.uk/" alt='Rightmove' target="_blank" rel="noreferrer">
                                    <button
                                        className='btn btn-outline btn-outline-orange btn-outline-orange-disabled setupCongrats__button-outline'
                                        onClick={()=> goToWebsites('Rightmove')}
                                    >Head to Rightmove</button>
                                </a>
                                <a href="https://www.zoopla.co.uk/" alt='Zoopla' target="_blank" rel="noreferrer">
                                    <button 
                                        className='btn btn-outline btn-outline-orange btn-outline-orange-disabled setupCongrats__button-outline'
                                        onClick={()=> goToWebsites('Zoopla')}
                                    >Head to Zoopla</button>
                                </a>
                                <a href="https://onthemarket.com/" alt='On the market' target="_blank" rel="noreferrer">
                                    <button 
                                        className='btn btn-outline btn-outline-orange btn-outline-orange-disabled setupCongrats__button-outline'
                                        onClick={()=> goToWebsites('OntheMarket')}
                                    >Head to On the Market</button>
                                </a>
         
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetupCongrats;
