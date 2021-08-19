import React from 'react'
import RatingItem from './RatingItem';



const CardRatings = () => {


    return (
        <ul className='cardRatings'>

            <RatingItem rating='Amazing' ratingOption='No of bathrooms'/>
            <RatingItem rating='Awful' ratingOption='No of bedrooms'/>
            <RatingItem rating='Meh' ratingOption='View'/>
            <RatingItem rating='Good' ratingOption='Location'/>
            
            
        </ul>
    )
}

export default CardRatings
