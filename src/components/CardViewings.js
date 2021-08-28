import React, { useEffect, useState, useContext } from 'react'
import { getUserPropertyViewingDetails, updateDashboardLocation, updateUserPropertyViewingDetails } from '../functions/apiFunctions'
import { calcDateDayDifference } from '../functions/otherFunctions';
import { ReloadStateContext } from '../state/ReloadState'



const CardViewings = ({ websiteurl, dashboardlocation, daystogo, setdaystogo }) => {

    const { reloadCarouselsGlobal, reloadPropertyGlobal } = useContext(ReloadStateContext);
    const [ ,reloadCarousels] = reloadCarouselsGlobal;
    const [, reloadProperty] = reloadPropertyGlobal;

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [address, setAddress] = useState('')



    useEffect(() => {
        getUserPropertyViewingDetails(websiteurl)
            .then(data => {
                setDate(data.viewing_date)
                setTime(data.viewing_time)
                setAddress(data.viewing_address)
            })
    }, [websiteurl])

    useEffect(() => {


        var timeout = setTimeout(()=> {
            updateUserPropertyViewingDetails(websiteurl, date, time, address, dashboardlocation, reloadCarousels)
                .then(()=> {
                    getUserPropertyViewingDetails(websiteurl)
                        .then(details =>{
                            if (dashboardlocation === 'upcoming_viewings'){
                                const newDaysToGo = calcDateDayDifference(details.viewing_date)
                                if (daystogo !== newDaysToGo){
                                    setdaystogo(newDaysToGo)
                                    reloadProperty()
                                }

                                if (newDaysToGo < 0){
                                    updateDashboardLocation(websiteurl, 'viewed', reloadCarousels)
                                    updateUserPropertyViewingDetails(websiteurl, '', '', '', dashboardlocation, reloadCarousels)
                                }
                            }
                        })
                })

        }, 2000)

        return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date, time, address, websiteurl])


 


    return (
        <div className='cardViewings'>
            <p className='cardViewings__title'>Add your viewing details below:</p>
            <form className='cardViewings__form'>
                <div className="cardViewings__form__item">
                    <label htmlFor="date" className='cardViewings__form__label'>Date</label>
                    <input 
                        type="date" 
                        id="date" 
                        className='cardViewings__form__input'
                        onChange={e => setDate(e.target.value)}
                        value={date}
                    />
                </div>
                <div className="cardViewings__form__item">
                    <label htmlFor="date" className='cardViewings__form__label'>Time</label>
                    <input 
                        type="time" 
                        id="Time" 
                        className='cardViewings__form__input'
                        onChange={e => setTime(e.target.value)}
                        value={time}
                    />
                </div>
                <div className="cardViewings__form__item">
                    <label htmlFor="date" className='cardViewings__form__label'>Address</label>
                    <input 
                        type="text" 
                        id="Address" 
                        className='cardViewings__form__input'
                        onChange={e => setAddress(e.target.value)}
                        value={address}
                    />
                </div>
            </form>
        </div>
    )
}

export default CardViewings
