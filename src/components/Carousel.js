import React from 'react'
import { IoAdd } from 'react-icons/io5';
import PropertyCard from './PropertyCard';



const Carousel = ({ properties, template }) => {

    const { title, subtitle, template__title, template__subtitle, home } = template

    return (
        <div className='carousel'>
            <h2 className='carousel__title'>
                {title} 
                <hr className="carousel__title__border"></hr>
            </h2>
            <h3 className='carousel__subtitle'><strong>{properties.length} {home}</strong> {subtitle}</h3>

            {
                properties.length ? 
                
                    <PropertyCard />
                
                : 

                <div className="carousel__template">
                        <IoAdd className='carousel__template__addIcon' />
                        <h4 className='carousel__template__title'>{template__title}</h4>
                        <hr className="carousel__template__title__border"></hr>
                        <h5 className='carousel__template__subtitle'>{template__subtitle}</h5> 
                </div>
            }

        </div>
    )
}

export default Carousel
