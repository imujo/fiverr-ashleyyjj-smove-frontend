import React, { useContext } from 'react'
import { getUserRating, updateRating } from '../functions/apiFunctions'
import { ReloadStateContext } from '../state/ReloadState'


const RatingDropdown = ({open, reference, setdropdown, websiteurl, ratingoption, setrating}) => {

    const { reloadCarouselsGlobal } = useContext(ReloadStateContext);
    const [,reloadCarousels] = reloadCarouselsGlobal;

    const update = (rating) => {

        updateRating(websiteurl, ratingoption, rating, reloadCarousels)
            .then(()=>{
                getUserRating(websiteurl, ratingoption)
                    .then(data => setrating(data))

                setTimeout(()=> {setdropdown(false)}, 100)
            })
        
    }
    


    return (
        <ul className={`ratingDropdown dropdown ${open ? 'dropdown-open' : ''}`} ref={reference}>
            <li onClick={()=> update('Amazing')} className='ratingDropdown__rating Amazing'>Amazing</li>
            <li onClick={()=> update('Good')} className='ratingDropdown__rating Good'>Good</li>
            <li onClick={()=> update('Meh')} className='ratingDropdown__rating Meh'>Meh</li>
            <li onClick={()=> update('Awful')} className='ratingDropdown__rating Awful'>Awful</li>
        </ul>
    )
}

export default RatingDropdown
