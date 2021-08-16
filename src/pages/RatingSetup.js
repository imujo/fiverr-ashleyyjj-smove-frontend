import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import SetupSidebar from '../components/SetupSidebar'  
import { useHistory } from "react-router-dom";


const RatingSetup = () => {

    let history = useHistory();

    const ratingOptions = ['Onddde', 'Twasdfso', 'Thrasdfee', 'Oasdfne', 'Tasdwo', 'Thdsafree', 'One', 'Two', 'Three']

    const categories = ['Outdoors', 'Indoors', 'Location', 'Size/Layout', 'Cost']

    const [categorySelected, setCategorySelected] = useState('Outdoors')

    const [ratingOption1, setRatingOption1] = useState('')
    const [ratingOption2, setRatingOption2] = useState('')
    const [ratingOption3, setRatingOption3] = useState('')
    const [ratingOption4, setRatingOption4] = useState('')

    const [canContinue, setCanContinue] = useState(false)

    const selectOption = (ratingOption) => {
        
        if (ratingOption === ratingOption1) { setRatingOption1('') }
        else if (ratingOption === ratingOption2) { setRatingOption2('') }
        else if (ratingOption === ratingOption3) { setRatingOption3('') }
        else if (ratingOption === ratingOption4) { setRatingOption4('') }
        else{
            if (!ratingOption1) { setRatingOption1(ratingOption) }
            else if (!ratingOption2) { setRatingOption2(ratingOption) }
            else if (!ratingOption3) { setRatingOption3(ratingOption) }
            else if (!ratingOption4) { setRatingOption4(ratingOption) }
            else{ allSelected(ratingOption) }
        }

    }

    const isSelected = (ratingOption) => {
        if (ratingOption === ratingOption1) { return true }
        else if (ratingOption === ratingOption2) { return true }
        else if (ratingOption === ratingOption3) { return true }
        else if (ratingOption === ratingOption4) { return true }
        else {return false}
    }
    const [errorRatingOption, setErrorRatingOption] = useState('')

    const allSelected = (ratingOption) => {
        setErrorRatingOption(ratingOption)
        setTimeout(()=> setErrorRatingOption(''), 100)
    }

    useEffect(() => {
        
        if (ratingOption1 && ratingOption2 && ratingOption3 && ratingOption4){
            setCanContinue(true)
        }else {
            setCanContinue(false)
        }

    }, [ratingOption1, ratingOption2, ratingOption3, ratingOption4])

    
    const submit = () => {

        console.log('submit')

        if ( ratingOption1 && ratingOption2 && ratingOption3 && ratingOption4){
            console.log('can submit')
            history.push('/setupcongrats')
        }
    }

    
    

    return (
        <div>
            <Nav></Nav>
            <div className="setup__page">
                <div className="setup__page__body">
                    <SetupSidebar />

                    <div className="ratingSetup setup">
                        <h1 className='setup__title'>Finally, let’s set up your ratings!</h1>
                        <h2 className='setup__subtitle'>List 4 things that you are looking for in your new home. These 4 things will show up on property listings for you to rate against.</h2>
                        <div className="ratingSetup__body">
                            <h3 className='setup__heading ratingSetup__label'>Category:</h3>
                            <div className="ratingSetup__categoriesList">
                                {
                                    categories.map((category, i)=>{
                                        return (
                                            <button 
                                                key={i}
                                                className={`
                                                    setup__button setup__button-secondary setup__button-secondary-fixed
                                                    ${categorySelected === category ? 'setup__button-secondary setup__button-secondary-active' : ''}
                                                `}
                                                onClick={()=> setCategorySelected(category)}
                                            >{category}</button>
                                        )
                                    })
                                }
                            </div>
                            <div className="ratingSetup__section">
                                <section>
                                    <h3 className='setup__heading ratingSetup__label'>Rating options:</h3>
                                    <div className="ratingSetup__ratingOptionsList">
                                        
                                        {
                                            ratingOptions.map((ratingOption, i)=>{
                                                return (
                                                    <button 
                                                        key={i} 
                                                        className={`
                                                            setup__button setup__button-secondary setup__button-secondary-flexible
                                                            ${isSelected(ratingOption) ? 'setup__button-secondary setup__button-secondary-active' : ''}
                                                            ${errorRatingOption === ratingOption ? 'setup__button-secondary setup__button-secondary-error' : ''}
                                                        `}
                                                        onClick={()=> selectOption(ratingOption)}
                                                    >{ratingOption}</button>
                                                )
                                            })
                                        }
                                    </div>
                                </section>

                                <section className='ratingSetup__section-select'>
                                    <h3 className='setup__heading ratingSetup__label'>Select from the list or type your own</h3>
                                    <div className="ratingSetup__select">
                                        <h4 className='ratingSetup__select__number'>1</h4>
                                        <input 
                                            type="text" 
                                            placeholder={true ? 'Type your own...' : ''} 
                                            value={ratingOption1}
                                            onChange={(e)=> setRatingOption1(e.target.value)}
                                        />
                                        <p onClick={()=>setRatingOption1('')}>X</p>
                                    </div>
                                    <div className="ratingSetup__select">
                                        <h4 className='ratingSetup__select__number'>2</h4>
                                        <input 
                                            type="text" 
                                            placeholder={true ? 'Type your own...' : ''} 
                                            value={ratingOption2}
                                            onChange={(e)=> setRatingOption2(e.target.value)}
                                        />
                                        <p onClick={()=>setRatingOption2('')}>X</p>
                                    </div>
                                    <div className="ratingSetup__select">
                                        <h4 className='ratingSetup__select__number'>3</h4>
                                        <input 
                                            type="text" 
                                            placeholder={true ? 'Type your own...' : ''} 
                                            value={ratingOption3}
                                            onChange={(e)=> setRatingOption3(e.target.value)}
                                        />
                                        <p onClick={()=>setRatingOption3('')}>X</p>
                                    </div>
                                    <div className="ratingSetup__select">
                                        <h4 className='ratingSetup__select__number'>4</h4>
                                        <input 
                                            type="text" 
                                            placeholder={true ? 'Type your own...' : ''} 
                                            value={ratingOption4}
                                            onChange={(e)=> setRatingOption4(e.target.value)}
                                        />
                                        <p onClick={()=>setRatingOption4('')}>X</p>
                                    </div>
                                </section>
                            </div>
                            <button 
                                className={`
                                    setup__button setup__button-primary ratingSetup__submit
                                    ${canContinue ? 'setup__button-primary-enabled' : 'setup__button-primary-disabled'}
                                `}
                                onClick={submit}
                            >Finish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatingSetup
