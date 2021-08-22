import React from 'react'
import Carousel from '../components/Carousel'

function Listings() {

    const templateText ={
        topRated: {
            title: 'Your top rated homes',
            subtitle: 'to sort - ordered highest to lowest',
            template__title: 'Your top rated homes will appear here!',
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

    return (
        <div className='listings'>

            <ul className="listings__stats">
                <li className="listings__stats__stat">
                    <p className="listings__stats__stat__number">0</p>
                    <p className="listings__stats__stat__title">Homes Rated</p>
                </li>
                <li className="listings__stats__stat">
                    <p className="listings__stats__stat__number">0</p>
                    <p className="listings__stats__stat__title">Think About List</p>
                </li>
                <li className="listings__stats__stat">
                    <p className="listings__stats__stat__number">0</p>
                    <p className="listings__stats__stat__title">Unrated Homes</p>
                </li>
            </ul>


            <Carousel template={templateText.topRated} properties={[1,2, 3, 4,1,2, 3, 4,]}/>
            <Carousel template={templateText.thinkAbout} properties={[]}/>
            <Carousel template={templateText.unrated} properties={[]}/>
        </div>
    )
}

export default Listings
