import React, { useState } from 'react'
import { IoBedOutline } from 'react-icons/io5';
import { BiBath } from 'react-icons/bi';
import CardRatings from './CardRatings';
import { BiChevronDown } from 'react-icons/bi';
import ManageDropdown from './ManageDropdown';
import CardViewings from './CardViewings';




const PropertyCard = () => {

    const [currentPage, setCurrentPage] = useState('Ratings')
    const [isManagedOpen, setIsManagedOpen] = useState(false)

    const viewings = true;

    return (
        <div className='propertyCard'>
            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80" alt="property" className='propertyCard__image' />

            <h1 className='propertyCard__title'>Devonshire Road, London, SW12</h1>
            <div className="propertyCard__details">
                <h2 className="propertyCard__details__price">£495,995</h2>
                <div className="propertyCard__details__vsBudget">
                    <p className="propertyCard__details__vsBudget__amount propertyCard__details__vsBudget__amount-lower">-£25,000</p>
                    <p className="propertyCard__details__vsBudget__label">vs budget</p>
                </div>

                <div className="propertyCard__details__stats">
                    <IoBedOutline className='propertyCard__details__stats__icon' />
                    <h2 className='propertyCard__details__stats__number'>2</h2>
                </div>

                <div className="propertyCard__details__stats">
                    <BiBath className='propertyCard__details__stats__icon' />
                    <h2 className='propertyCard__details__stats__number'>2</h2>
                </div>
            </div>

            <div className="propertyCard__navigation">
                {
                    viewings ?
                    <h3 
                        className={`
                            propertyCard__navigation__item
                            ${currentPage === 'Viewings' ? 'propertyCard__navigation__item-active' : ''}
                        `}
                        onClick={()=> setCurrentPage('Viewings')}
                    >Viewings</h3>
                    
                    : null
                }
                <h3 
                    className={`
                        propertyCard__navigation__item
                        ${currentPage === 'Ratings' ? 'propertyCard__navigation__item-active' : ''}
                    `}
                    onClick={()=> setCurrentPage('Ratings')}
                >Ratings</h3>
                <h3 
                    className={`
                        propertyCard__navigation__item
                        ${currentPage === 'Notes' ? 'propertyCard__navigation__item-active' : ''}
                    `}
                    onClick={()=> setCurrentPage('Notes')}
                >Notes</h3>
            </div>

            { currentPage === 'Ratings' ? <CardRatings /> : null }
            { 
                currentPage === 'Notes' ?
                    <textarea className='propertyCard__notes'  placeholder="Make a quick note..." />
                : 
                    null 
            }
            { currentPage === 'Viewings' ? <CardViewings /> : null }

            <div className="propertyCard__organize">
                <button className="propertyCard__organize__button propertyCard__organize__button-wide">See listing</button>
                <button className="propertyCard__organize__button propertyCard__organize__button-narrow">X</button>
                <button 
                    className="propertyCard__organize__button propertyCard__organize__button-wide"
                    onClick={()=> setIsManagedOpen(!isManagedOpen)}
                >
                    Manage
                    <BiChevronDown />
                    <ManageDropdown open={isManagedOpen} setismanagedopen={setIsManagedOpen}/>
                </button>

            </div>

        </div>
    )
}

export default PropertyCard
