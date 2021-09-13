import React, { useEffect, useState, useContext } from 'react'
import SelectRatingOptions from '../components/SelectRatingOptions'
import ToggleSwitch from '../components/ToggleSwitch'
import UserSetupForm from '../components/UserSetupForm'
import { updateUserSettings } from '../functions/apiFunctions'
import { fetchUser } from '../functions/authFunctions'
import { ReloadStateContext } from '../state/ReloadState'


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

    const { alertGlobal } = useContext(ReloadStateContext);
    const [, addAlert] = alertGlobal;

    useEffect(() => {
        fetchUser()
            .then(user => {
                setRatingOption1(user.ratingoption1)
                setRatingOption2(user.ratingoption2)
                setRatingOption3(user.ratingoption3)
                setRatingOption4(user.ratingoption4)

                setImA(user.buyertype)
                setMovingWith(user.movingwith)
                setBudget(user.budget)

                setEmail(user.email_contact)
                setSMS(user.sms_contact)
                setPost(user.post_contact)
                
            })
    }, [])

    const submit = () => {
        updateUserSettings(imA, movingWith, budget, ratingOption1, ratingOption2, ratingOption3, ratingOption4,email ,SMS ,post)
            .then((res)=> addAlert(res.details, 'success'))
            .catch((res)=> addAlert(res.details, 'error'))
    }
    

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
                <h3 className='carousel__subtitle account__section__subtitle'>At smove we do all of the hard work for you. We’ll send you reminders, the latest product news, inights & offers. I agree to have smove contact me via:</h3>

                <ul className='account__managePreferences__list'>
                    <div className="account__managePreferences__list__item">
                        <label className='account__managePreferences__list__label'>Email*</label>
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

            <button 
                className="btn btn-fill btn-fill-orange btn-hover account__save"
                onClick={submit}
            >Save</button>
        </div>
    )
}

export default Account
