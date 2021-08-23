import React from 'react'
import Carousel from '../components/Carousel'

const Viewings = () => {

    const templateText ={
        toView: {
            title: 'Homes to view',
            subtitle: 'you need to book a viewing for',
            template__title: 'Fill this list up with homes you want to book a viewing for',
            template__subtitle: '',
            home: 'homes'
        },
        upcomingViews: {
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
    return (
        <div className='viewings'>
            <div className='spacer'></div>
            <Carousel template={templateText.toView} properties={[]}/>
            <Carousel template={templateText.upcomingViews} properties={[]}/>
            <Carousel template={templateText.viewed} properties={[]}/>
            <Carousel template={templateText.offers} properties={[]}/>
        </div>
    )
}

export default Viewings
