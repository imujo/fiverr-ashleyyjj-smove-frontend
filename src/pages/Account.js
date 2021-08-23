import React, { useState } from 'react'
import SelectRatingOptions from '../components/SelectRatingOptions'
import ToggleSwitch from '../components/ToggleSwitch'
import UserSetupForm from '../components/UserSetupForm'

const Account = () => {

    const [ratingOption1, setRatingOption1] = useState('')
    const [ratingOption2, setRatingOption2] = useState('')
    const [ratingOption3, setRatingOption3] = useState('')
    const [ratingOption4, setRatingOption4] = useState('')

    const [imA, setImA] = useState('')
    const [movingWith, setMovingWith] = useState('')
    const [budget, setBudget] = useState(0)

    const [email, setEmail] = useState(false)
    const [SMS, setSMS] = useState(false)
    const [post, setPost] = useState(false)

    return (
        <div className='account'>
            <div style={{gridArea: 'manageRatings'}} className='account__section'>
                <h2 className='carousel__title account__section__title'>
                    Manage Ratings
                    <div className="carousel__title__border account__section__title__border"></div>
                </h2>
                <h3 className='carousel__subtitle account__section__subtitle'>Below are your current ratings! When you amend or remove one of them it will erase the previous data.</h3>
                <SelectRatingOptions 
                    ratingoption1={ratingOption1}
                    ratingoption2={ratingOption2}
                    ratingoption3={ratingOption3}
                    ratingoption4={ratingOption4}
                    setratingoption1={setRatingOption1}
                    setratingoption2={setRatingOption2}
                    setratingoption3={setRatingOption3}
                    setratingoption4={setRatingOption4}
                    
                />
            </div>

            <div style={{gridArea: 'accountDetails'}} className='account__section'>
                <h2 className='carousel__title account__section__title'>
                    Account Details
                    <div className="carousel__title__border"></div>
                </h2>
                <UserSetupForm 
                    ima={imA}
                    movingwith={movingWith}
                    budget={budget}
                    setima={setImA}
                    setmovingwith={setMovingWith}
                    setbudget={setBudget}
                />
            </div>
            <div style={{gridArea: 'contactPreferences'}} className='account__section'>
                <h2 className='carousel__title account__section__title'>
                    Contact Preferences
                    <div className="carousel__title__border"></div>
                </h2>
                <h3 className='carousel__subtitle account__section__subtitle'>At smove, we do all the hard work for you. Services such as account and viewing reminders, the latest product news and insights. I agree to have <strong>smove</strong> contact me via:</h3>

                <ul className='account__managePreferences__list'>
                    <div className="account__managePreferences__list__item">
                        <label className='account__managePreferences__list__label'>Email</label>
                        <ToggleSwitch setchecked={setEmail} checked={email} />
                    </div>
                    <div className="account__managePreferences__list__item">
                        <label className='account__managePreferences__list__label'>SMS</label>
                        <ToggleSwitch setchecked={setSMS} checked={SMS} />
                    </div>
                    <div className="account__managePreferences__list__item">
                        <label className='account__managePreferences__list__label'>Post</label>
                        <ToggleSwitch setchecked={setPost} checked={post} />
                    </div>
                </ul>

                <h3 className='carousel__subtitle account__section__subtitle'>*We will also use your email address (anonymised to protect your identity) to display relevant content to you on social media and other websites. Please see our privacy policy for more information.</h3>



                
            </div>
        </div>
    )
}

export default Account
