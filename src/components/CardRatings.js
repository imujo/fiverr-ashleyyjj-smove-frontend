import React, { useEffect, useState } from 'react'
import { getUserRatingOptions } from '../functions/apiFunctions';
import RatingItem from './RatingItem';



const CardRatings = ({ websiteurl }) => {

    const [ratingOptions, setRatingOptions] = useState([])

    useEffect(() => {
        getUserRatingOptions(websiteurl)
        .then(data=> {
            setRatingOptions(Object.values(data))
            
        })
    }, [websiteurl])


    return (
        <ul className='cardRatings'>

            {
                ratingOptions.map((ratingOption, i)=>{
                    return <RatingItem ratingOption={ratingOption} websiteurl={websiteurl} key={i}/>
                })
            }
            
            
        </ul>
    )
}

export default CardRatings
