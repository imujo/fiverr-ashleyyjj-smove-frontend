import React, { useEffect, useRef, useState, useContext } from 'react'
import { IoBedOutline } from 'react-icons/io5';
import { BiBath } from 'react-icons/bi';
import CardRatings from './CardRatings';
import { BiChevronDown } from 'react-icons/bi';
import ManageDropdown from './ManageDropdown';
import CardViewings from './CardViewings';
import { deleteUserProperty, getProperty, updateNote } from '../functions/apiFunctions';
import { calcVsBudget, commify } from '../functions/otherFunctions'
import { ReloadStateContext } from '../state/ReloadState'
import ReactGA from 'react-ga'




const PropertyCard = ({note, websiteurl, dashboardlocation, viewings, manageoptions}) => {

    const [currentPage, setCurrentPage] = useState(viewings ? 'Viewings' : 'Ratings')
    const [isManagedOpen, setIsManagedOpen] = useState(false)
    const [propertyInfo, setPropertyInfo] = useState({price: 0})
    const [noteValue, setNoteValue] = useState(note ? note : '')
    const [vsBudget, setVsBudget] = useState({})
    const [daysToGo, setDaysToGo] = useState(0)

    const { reloadPropertyGlobal, reloadCarouselsGlobal } = useContext(ReloadStateContext);
    const [propertyReloadState, ] = reloadPropertyGlobal;
    const [, reloadCarousels] = reloadCarouselsGlobal

    const initalRender = useRef(true)


    const reactGaEvent = (event) => {
        
        ReactGA.event({
            category: 'Property Cards',
            action: `PC_${event}`
        })

    }


    
    
    useEffect(() => {
        getProperty(websiteurl)
            .then(data =>  setPropertyInfo(data))
        
        calcVsBudget(propertyInfo.price)
            .then(data => setVsBudget(data))


        
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [websiteurl, propertyInfo.price, dashboardlocation, propertyReloadState])

    
    useEffect(() => {

        if (initalRender.current){
            initalRender.current = false
        }else{
            var timeout = setTimeout(()=> updateNote(websiteurl, noteValue), 2000)
        }

        return () => clearTimeout(timeout)
    }, [noteValue, websiteurl])
    
    
    
    const price = commify(propertyInfo.price) ? `£${commify(propertyInfo.price)}` : 'NaN'


    return (
        <div className='propertyCard'>
            {
                dashboardlocation === 'upcoming_viewings' ? 
                    <div className="propertyCard__daysToGo"><strong>{daysToGo} days</strong> to go</div>
                    : undefined
            }
            <img src={`${propertyInfo.imageurl}`} alt="property" className='propertyCard__image' />

            <h1 className='propertyCard__title'>{propertyInfo.address}</h1>
            <div className="propertyCard__details">
                <h2 className="propertyCard__details__price">{price}</h2>
                <div className="propertyCard__details__vsBudget">
                    <p className={`propertyCard__details__vsBudget__amount ${vsBudget.className}`}>{vsBudget.value}</p>
                    <p className="propertyCard__details__vsBudget__label">vs budget</p>
                </div>

                <div className="propertyCard__details__stats">
                    <IoBedOutline className='propertyCard__details__stats__icon' />
                    <h2 className='propertyCard__details__stats__number'>{propertyInfo.bedrooms ? propertyInfo.bedrooms : 0}</h2>
                </div>

                <div className="propertyCard__details__stats">
                    <BiBath className='propertyCard__details__stats__icon' />
                    <h2 className='propertyCard__details__stats__number'>{propertyInfo.bathrooms ? propertyInfo.bathrooms : 0}</h2>
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
                        onClick={()=> {reactGaEvent('Viewings'); setCurrentPage('Viewings')}}
                    >Viewings</h3>
                    
                    : null
                }
                <h3 
                    className={`
                        propertyCard__navigation__item
                        ${currentPage === 'Ratings' ? 'propertyCard__navigation__item-active' : ''}
                    `}
                    onClick={()=> {reactGaEvent('Ratings'); setCurrentPage('Ratings')}}
                >Ratings</h3>
                <h3 
                    className={`
                        propertyCard__navigation__item
                        ${currentPage === 'Notes' ? 'propertyCard__navigation__item-active' : ''}
                    `}
                    onClick={()=> {reactGaEvent('Notes'); setCurrentPage('Notes')}}
                >Notes</h3>
            </div>

            { currentPage === 'Ratings' ? <CardRatings websiteurl={websiteurl} /> : null }
            { 
                currentPage === 'Notes' ?
                    <textarea 
                        className='propertyCard__notes'  
                        placeholder="Make a quick note..." 
                        value={noteValue}
                        onChange={e=> setNoteValue(e.target.value)}
                    />
                : 
                    null 
            }
            { currentPage === 'Viewings' ? <CardViewings websiteurl={websiteurl} dashboardlocation={dashboardlocation} daystogo={daysToGo} setdaystogo={setDaysToGo} /> : null }

            <div className="propertyCard__organize">
                <a href={propertyInfo.websiteurl} target="_blank" rel="noreferrer">
                    <button className="propertyCard__organize__button propertyCard__organize__button-wide">See listing</button>
                </a>
                <button className="propertyCard__organize__button propertyCard__organize__button-narrow" onClick={()=> {reactGaEvent('Dismiss'); deleteUserProperty(websiteurl, reloadCarousels)}}>X</button>
                <button 
                    className="propertyCard__organize__button propertyCard__organize__button-wide"
                    onClick={()=> setIsManagedOpen(!isManagedOpen)}
                >
                    Manage
                    <BiChevronDown />
                    <ManageDropdown open={isManagedOpen} setismanagedopen={setIsManagedOpen} options={manageoptions} websiteurl={websiteurl}/>
                </button>

            </div>

        </div>
    )
}

export default PropertyCard
