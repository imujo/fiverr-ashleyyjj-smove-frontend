const api = process.env.REACT_APP_API


export const logIn = (email, password) => {

    const data = {
        email: email,
        password: password
    }
    
    return fetch(`${api}/auth/login`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then((data)=> {
            
            if (data.isSuccess){
                console.log('Logged in')
                localStorage.removeItem('jwtToken')
                localStorage.setItem('jwtToken', data.token)
                localStorage.setItem('isAuth', true)
            }
            return data
        })
        .catch(err => {console.log("There has been an error logging in user"); return err})
}

export const signUp = ( fname, lname, email, password, marketing) => {
    
    const data = {
        firstname: fname,
        lastname: lname,
        email: email,
        password: password,
        marketing: marketing
    }

    return fetch(`${process.env.REACT_APP_API}/auth/register`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {

            if (data.isSuccess){
                localStorage.removeItem('jwtToken')
                localStorage.setItem('jwtToken', data.token)
                localStorage.setItem('isAuth', true)
                console.log('Registered')
            }
            return data
            
        })
        .catch  (err => {console.log('There has been an error registering user'); return err})
}

export const fetchUser = () => {
    
    return fetch(`${api}/auth/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwtToken')
        }
    })
        .then(res => res.json())
        .then(user => {return user})
        .catch(console.log)
}

export const userSetup = ( buyertype, movingwith, budget ) => {
    
    const data = {
        buyertype: buyertype,
        movingwith: movingwith,
        budget: budget
    }

    return fetch(`${process.env.REACT_APP_API}/auth/usersetup`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwtToken')
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(message => {console.log('Added user setup'); return message})
        .catch  (err => {console.log('There has been an error setting up user'); return err})
}

export const ratingSetup = (ratingoption1, ratingoption2, ratingoption3, ratingoption4) => {
    
    const data = {
        ratingoption1: ratingoption1,
        ratingoption2: ratingoption2,
        ratingoption3: ratingoption3,
        ratingoption4: ratingoption4,
    }

    return fetch(`${process.env.REACT_APP_API}/auth/ratingsetup`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwtToken')
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(message => {console.log('Added user rating options'); return message})
        .catch  (err => {console.log('There has been an error adding user rating options'); return err})

}

export const deleteUser = ( userid ) => { // FIX
    

    return fetch(`${process.env.REACT_APP_API}/auth/user/${userid}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwtToken')
        },
    })
        .then(res => res.json())
        .then(message => {console.log('Deleted user'); return message})
        .catch  (err => {console.log('There has been an error deleting the user'); return err})
}

export const reqPasswordReset = ( email ) => {
    

    return fetch(`${process.env.REACT_APP_API}/auth/req-pswrd-reset`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email
        })
    })
        .then(res => res.json())
        .then(res => {console.log('Requested password reset'); return res.isSuccess})
        .catch  (err => {console.log('There has been an error requesting password reset'); return false})
}

export const passwordReset = ( userId, reset_token, password ) => {
    

    return fetch(`${process.env.REACT_APP_API}/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: userId,
            reset_token: reset_token,
            password: password
        })
    })
        .then(res => res.json())
        .then(res => {console.log('Reset password'); return res.isSuccess})
        .catch  (err => {console.log('There has been an error reseting password'); return false})
}