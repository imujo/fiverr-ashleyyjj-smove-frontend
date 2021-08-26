import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import SetupSidebar from '../components/SetupSidebar'
import { useHistory } from "react-router-dom";
import UserSetupForm from '../components/UserSetupForm';
import { userSetup } from '../functions/authFunctions';


const UserSetup = () => {

    let history = useHistory();
    const [imA, setImA] = useState('')
    const [movingWith, setMovingWith] = useState('')
    const [budget, setBudget] = useState(0)



    const submit = () => {

        if ( imA && budget && movingWith){
            userSetup(imA, movingWith, budget)
             .then(()=> history.push('/ratingsetup'))
             .catch(err => console.log(err.msg))
        }
    }

    const [canContinue, setCanContinue] = useState(false)


    useEffect(() => {
        
        if (imA && movingWith && budget){
            setCanContinue(true)
        }else {
            setCanContinue(false)
        }

    }, [imA, movingWith, budget])


    

    return (
        <div>
            <Nav></Nav>
            <div className="setup__page">
                <div className="setup__page__body">
                    <SetupSidebar />

                    <div className="userSetup setup">
                        <h1 className='setup__title userSetup__title' >What type of homemover are you?</h1>
                        <h2 className='setup__subtitle userSetup__subtitle'>Tell us a little bit more about your move so we can help you with relevant information and a personalised dashboard.</h2>



                        <UserSetupForm 
                            ima={imA}
                            movingwith={movingWith}
                            budget={budget}
                            setima={setImA}
                            setmovingwith={setMovingWith}
                            setbudget={setBudget}
                        />

                            <button 
                                className={`
                                    userSetup__form__submit btn btn-fill btn-fill-orange btn-shadow
                                    ${canContinue ? '' : 'btn-fill-orange-disabled'}
                                `}
                                onClick={submit}
                                >Next, set up preferences
                            </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserSetup
