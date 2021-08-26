import React, { useEffect, useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi';
import { getUserRating } from '../functions/apiFunctions';
import RatingDropdown from './RatingDropdown';


const RatingItem = ({ ratingOption, websiteurl }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdown = useRef()
    const [rating, setRating] = useState('')

    


    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (dropdownOpen && dropdown.current && !dropdown.current.contains(e.target)) {
            setDropdownOpen(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [dropdownOpen])


    useEffect(() => {
      getUserRating(websiteurl, ratingOption)
        .then(data => setRating(data))


    }, [websiteurl, ratingOption])

    return (
        <li className="cardRatings__ratingItem">
                <p className='cardRatings__ratingOption'>{ratingOption}</p>
                <div onClick={()=> setDropdownOpen(true)}>
                    <BiChevronDown 
                        className={`cardRatings__darrow ${rating}`} 
                        
                    />
                    <h6 className={`cardRatings__rating ${rating}`}>
                        {rating}
                        <RatingDropdown 
                          open={dropdownOpen} 
                          reference={dropdown} 
                          setdropdown={setDropdownOpen} 
                          websiteurl={websiteurl}
                          ratingoption={ratingOption}
                          setrating={setRating}
                        />
                    </h6>
                </div>
            </li>
    )
}

export default RatingItem
