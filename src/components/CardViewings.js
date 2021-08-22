import React from 'react'

const CardViewings = () => {
    return (
        <div className='cardViewings'>
            <p className='cardViewings__title'>Add your viewing details below:</p>
            <form className='cardViewings__form'>
                <div className="cardViewings__form__item">
                    <label htmlFor="date" className='cardViewings__form__label'>Date</label>
                    <input type="date" id="date" className='cardViewings__form__input'/>
                </div>
                <div className="cardViewings__form__item">
                    <label htmlFor="date" className='cardViewings__form__label'>Time</label>
                    <input type="time" id="Time" className='cardViewings__form__input'/>
                </div>
                <div className="cardViewings__form__item">
                    <label htmlFor="date" className='cardViewings__form__label'>Address</label>
                    <input type="text" id="Address" className='cardViewings__form__input'/>
                </div>
            </form>
        </div>
    )
}

export default CardViewings
