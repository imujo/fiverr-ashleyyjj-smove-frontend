import React from 'react'

const SelectRatingOptions = ({ ratingoption1, ratingoption2, ratingoption3, ratingoption4, setratingoption1, setratingoption2, setratingoption3, setratingoption4, label }) => {
    return (
        <section className='ratingSetup__section-select'>
            { label ? <h3 className='setup__heading ratingSetup__label'>{label}</h3> : null}
            <div className="ratingSetup__select">
                <h4 className='ratingSetup__select__number'>1</h4>
                <input 
                    type="text" 
                    placeholder={true ? 'Type your own...' : ''} 
                    value={ratingoption1}
                    onChange={(e)=> setratingoption1(e.target.value)}
                />
                <p onClick={()=>setratingoption1('')}>X</p>
            </div>
            <div className="ratingSetup__select">
                <h4 className='ratingSetup__select__number'>2</h4>
                <input 
                    type="text" 
                    placeholder={true ? 'Type your own...' : ''} 
                    value={ratingoption2}
                    onChange={(e)=> setratingoption2(e.target.value)}
                />
                <p onClick={()=>setratingoption2('')}>X</p>
            </div>
            <div className="ratingSetup__select">
                <h4 className='ratingSetup__select__number'>3</h4>
                <input 
                    type="text" 
                    placeholder={true ? 'Type your own...' : ''} 
                    value={ratingoption3}
                    onChange={(e)=> setratingoption3(e.target.value)}
                />
                <p onClick={()=>setratingoption3('')}>X</p>
            </div>
            <div className="ratingSetup__select">
                <h4 className='ratingSetup__select__number'>4</h4>
                <input 
                    type="text" 
                    placeholder={true ? 'Type your own...' : ''} 
                    value={ratingoption4}
                    onChange={(e)=> setratingoption4(e.target.value)}
                />
                <p onClick={()=>setratingoption4('')}>X</p>
            </div>
        </section>
    )
}

export default SelectRatingOptions
