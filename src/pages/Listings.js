import React, { useState, useEffect, useContext } from 'react'
import Carousel from '../components/Carousel'
import { getProperties } from '../functions/apiFunctions'
import { ReloadStateContext } from '../state/ReloadState'



function Listings() {

    const templateText ={
        topRated: {
            title: 'Your top rated homes',
            subtitle: 'to sort - ordered highest to lowest',
            template__title: 'Your top rated homes will appear here',
            template__subtitle: 'Go & get rating homes on your favourite property websites.',
            home: 'homes'
        },
        thinkAbout: {
            title: 'Think about list',
            subtitle: 'to think about  - go to the pub & chat about them.',
            template__title: 'Add homes you want to give a little bit more thought to here',
            template__subtitle: '',
            home: 'homes'
        },
        unrated: {
            title: 'Unrated homes',
            subtitle: 'not yet rated',
            template__title: 'Any homes you view but don’t rate will be saved here when ‘auto save’ is on',
            template__subtitle: '',
            home: 'homes'
        }
    }

    const manageOptions = {
        topRated: [
            {
                title: "Move to 'think about' list",
                newLocation: 'think_about',
                ga: 'Move_to_tb'
            },
            {
                title: "Move to 'viewings' list",
                newLocation: 'to_view',
                ga: 'Move_to_vl'
            },
        ],
        thinkAbout: [
            {
                title: "Move to 'viewings' list",
                newLocation: 'to_view',
                ga: 'Move_to_vl'
            },
        ],
        unrated: [
            {
                title: "Move to 'think about' list",
                newLocation: 'think_about',
                ga: 'Move_to_tb'
            },
        ]
    }
    
    const [topRatedProperties, setTopRatedProperties] = useState([])
    const [unratedProperies, setUnratedProperies] = useState([])
    const [thinkAboutProperties, setThinkAboutProperties] = useState([])

    const { reloadCarouselsGlobal } = useContext(ReloadStateContext);
    const [carouselsReloadState,] = reloadCarouselsGlobal;


    useEffect(() => {
        getProperties('top')
            .then(data => setTopRatedProperties(data))
        
        getProperties('unrated')
            .then(data => setUnratedProperies(data))
        
        getProperties('think_about')
            .then(data => setThinkAboutProperties(data))

    }, [carouselsReloadState])


    return (
        <div className='listings'>

            <ul className="listings__stats">
                <li className="listings__stats__stat">
                    <p className="listings__stats__stat__number">{topRatedProperties.length}</p>
                    <p className="listings__stats__stat__title">Homes Rated</p>
                </li>
                <li className="listings__stats__stat">
                    <p className="listings__stats__stat__number">{thinkAboutProperties.length}</p>
                    <p className="listings__stats__stat__title">Think About List</p>
                </li>
                <li className="listings__stats__stat">
                    <p className="listings__stats__stat__number">{unratedProperies.length}</p>
                    <p className="listings__stats__stat__title">Unrated Homes</p>
                </li>
            </ul>


            <Carousel 
                template={templateText.topRated} 
                properties={topRatedProperties} 
                viewings={false}
                manageoptions={manageOptions.topRated}
            />
            <Carousel 
                template={templateText.thinkAbout} 
                properties={thinkAboutProperties} 
                viewings={false}
                manageoptions={manageOptions.thinkAbout}
            />
            <Carousel 
                template={templateText.unrated} 
                properties={unratedProperies} 
                viewings={false}
                manageoptions={manageOptions.unrated}
            />
        </div>
    )
}

export default Listings
