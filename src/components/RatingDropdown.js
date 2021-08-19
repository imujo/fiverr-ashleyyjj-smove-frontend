import React from 'react'

const RatingDropdown = ({open, reference, setdropdown}) => {

    const updateRating = (rating) => {
        
        setTimeout(()=> setdropdown(false), 100)
    }
    


    return (
        <ul className={`ratingDropdown dropdown ${open ? 'dropdown-open' : ''}`} ref={reference}>
            <li onClick={()=> updateRating('Amazing')} className='ratingDropdown__rating Amazing'>Amazing</li>
            <li onClick={()=> updateRating('Good')} className='ratingDropdown__rating Good'>Good</li>
            <li onClick={()=> updateRating('Meh')} className='ratingDropdown__rating Meh'>Meh</li>
            <li onClick={()=> updateRating('Awful')} className='ratingDropdown__rating Awful'>Awful</li>
        </ul>
    )
}

export default RatingDropdown
