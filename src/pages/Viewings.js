import React, { useState, useEffect, useContext } from 'react'
import Carousel from '../components/Carousel'
import { getProperties } from '../functions/apiFunctions'
import { ReloadStateContext } from '../state/ReloadState'

const Viewings = () => {

    const templateText ={
        toView: {
            title: 'Homes to view',
            subtitle: 'you need to book a viewing for',
            template__title: 'Fill this list up with homes you want to book a viewing for',
            template__subtitle: '',
            home: 'homes'
        },
        upcomingViewings: {
            title: 'Upcoming viewings',
            subtitle: 'viewings booked',
            template__title: 'Keep track of upcoming viewings here',
            template__subtitle: 'Simply add your viewing booking details',
            home: 'home'
        },
        viewed: {
            title: 'Viewed homes',
            subtitle: 'already viewed',
            template__title: 'This is the place for the homes that you have viewed',
            template__subtitle: 'Now decide if you want to make an offer',
            home: 'homes'
        },
        offers: {
            title: 'Offers',
            subtitle: 'under offer',
            template__title: 'Move homes you want to make an offer on to here',
            template__subtitle: '',
            home: 'homes'
        },
    }

    const manageOptions = {
        toView: [
            {
                title: "Move to 'think about' list",
                newLocation: 'think_about'
            },
            {
                title: "Move to 'already viewed'",
                newLocation: 'viewed'
            },
            {
                title: "Move to 'made an offer'",
                newLocation: 'offers'
            },
        ],
        upcomingViewings: [
            {
                title: "Move to 'think about' list",
                newLocation: 'think_about'
            },
            {
                title: "Move to 'already viewed'",
                newLocation: 'viewed'
            },
            {
                title: "Move to 'made an offer'",
                newLocation: 'offer_made'
            },
        ],
        viewed: [
            {
                title: "Move to 'think about' list",
                newLocation: 'think_about'
            },
            {
                title: "Book another viewing",
                newLocation: 'to_view'
            },
            {
                title: "Move to 'made an offer'",
                newLocation: 'offers'
            },
        ],
        offers: [
            {
                title: "Move to 'think about' list",
                newLocation: 'think_about'
            },
            {
                title: "Book a viewing",
                newLocation: 'to_view'
            }
        ],
    }

    const [viewingsProperties, setViewingsProperties] = useState([])
    const [upcomingViewingsProperties, setUpcomingViewingsProperties] = useState([])
    const [viewedProperties, setViewedProperties] = useState([])
    const [offersProperties, setOffersProperties] = useState([])


    const { reloadCarouselsGlobal } = useContext(ReloadStateContext);
    const [carouselsReloadState,] = reloadCarouselsGlobal;


    useEffect(() => {
        // console.log(carouselsReloadState)
        getProperties('to_view')
            .then(data => setViewingsProperties(data))
        
        getProperties('upcoming_viewings')
            .then(data => setUpcomingViewingsProperties(data))
        
        getProperties('viewed')
            .then(data => setViewedProperties(data))
        
            getProperties('offers')
            .then(data => setOffersProperties(data))

    }, [carouselsReloadState])


    return (
        <div className='viewings'>
            <div className='spacer'></div>
            <Carousel 
                template={templateText.toView} 
                properties={viewingsProperties}
                viewings={true}
                manageoptions={manageOptions.toView}
            />
            <Carousel 
                template={templateText.upcomingViewings} 
                properties={upcomingViewingsProperties}
                viewings={true}
                manageoptions={manageOptions.upcomingViewings}
            />
            <Carousel 
                template={templateText.viewed} 
                properties={viewedProperties}
                viewings={true}
                manageoptions={manageOptions.viewed}
            />
            <Carousel 
                template={templateText.offers} 
                properties={offersProperties}
                viewings={true}
                manageoptions={manageOptions.offers}
            />
        </div>
    )
}

export default Viewings
