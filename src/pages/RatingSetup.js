import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import SetupSidebar from '../components/SetupSidebar'  
import { useHistory } from "react-router-dom";
import SelectRatingOptions from '../components/SelectRatingOptions';
import { ratingSetup } from '../functions/authFunctions';


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
            ratingSetup(ratingOption1, ratingOption2, ratingOption3, ratingOption4)
                .then(()=> history.push('/setupcongrats'))
                .catch((err)=> console.log(err))
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
                                                    btn btn-fill btn-fill-blue ratingSetup__button
                                                    ${categorySelected === category ? 'btn-fill-blue-active' : ''}
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
                                                            btn btn-fill btn-fill-blue
                                                            btn-flexible ratingSetup__button-rating
                                                            ${isSelected(ratingOption) ? 'btn-fill-blue-active' : ''}
                                                            ${errorRatingOption === ratingOption ? 'btn-error' : ''}
                                                        `}
                                                        onClick={()=> selectOption(ratingOption)}
                                                    >{ratingOption}</button>
                                                )
                                            })
                                        }
                                    </div>
                                </section>


                                <SelectRatingOptions 
                                    ratingoption1={ratingOption1}
                                    ratingoption2={ratingOption2}
                                    ratingoption3={ratingOption3}
                                    ratingoption4={ratingOption4}
                                    setratingoption1={setRatingOption1}
                                    setratingoption2={setRatingOption2}
                                    setratingoption3={setRatingOption3}
                                    setratingoption4={setRatingOption4}
                                    label='Select from the list or type your own'
                                />
                            </div>
                            <button 
                                className={`
                                userSetup__form__submit btn btn-fill btn-fill-orange btn-shadow
                                ${canContinue ? '' : 'btn-fill-orange-disabled'}
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
