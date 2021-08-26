
const api = process.env.REACT_APP_API


export const getProperties = (location) => {
    
    return fetch(`${api}/api/userproperties/${location}`)
        .then(res => res.json())
        .then(data => {console.log('Got properties'); return data.data})
        .catch(err => {console.log('Couldnt get properties'); return null})
}

export const getProperty = (websiteUrl) => {

    return fetch(`${process.env.REACT_APP_API}/api/properties/one`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({websiteurl: websiteUrl})
    })
        .then(res => res.json())
        .then(property => { console.log('Got property'); return property.data })
        .catch  (err => {console.log('Couldnt get property'); return null})
}

export const getUserRating = (websiteUrl, ratingOption) => {
    return fetch(`${api}/api/ratings`, {
        method: "POST",
        body: JSON.stringify({
            websiteurl: websiteUrl,
            ratingoption: ratingOption
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(data=> {console.log('Got rating'); return data.data})
        .catch(e=> {console.log('Couldnt get user rating'); return false})

}

export const getUserRatings = (websiteUrl) => {
    return fetch(`${api}/api/ratings/all`, {
        method: "POST",
        body: JSON.stringify({
            websiteurl: websiteUrl
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(data=> {console.log('Get ratings'); return data.data})
        .catch(e=> {console.log('Couldnt get user ratings'); return false})

}

export const updateDashboardLocation = (websiteurl, dashboardlocation, reloadCarousels) => {
    return fetch(`${api}/api/userproperties/dashboardlocation`, {
        method: "PUT",
        body: JSON.stringify({
            websiteurl: websiteurl,
            dashboardlocation: dashboardlocation
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(()=> reloadCarousels())
        .then(json => {return json})
        .catch(err => {console.log(err); return false });
}

export const updateUserPropertyViewingDetails = (websiteurl, viewing_date, viewing_time, viewing_address, reloadCarousels) => {
    return fetch(`${api}/api/userproperties/viewnigDetails`, {
        method: "PUT",
        body: JSON.stringify({
            websiteurl: websiteurl,
            viewing_date: viewing_date,
            viewing_time: viewing_time,
            viewing_address: viewing_address,
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then(json => json.json())
            .then(data => {
                console.log('Updated viewing details')
                if (data.move){
                    reloadCarousels()
                }
                return data
            })
            .catch(err => {console.log(err); return false });
}

export const getUserPropertyViewingDetails = (websiteUrl) => {
    return fetch(`${api}/api/userproperties/viewnigDetails`, {
        method: "POST",
        body: JSON.stringify({
            websiteurl: websiteUrl
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json())
        .then(data=> {console.log('Get property details'); return data.data})
        .catch(e=> {console.log('Couldnt get property details'); return false})

}

export const moveToRatedNeeded = (websiteurl) => {
    return fetch(`${api}/api/userproperties/move_to_rated`, {
        method: "POSt",
        body: JSON.stringify({
            websiteurl: websiteurl,
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
            .then(json => json.json())
            .then(data => {return data})
            .catch(err => {console.log(err); return null });
}


export const updateRating = (websiteUrl, ratingOption, newRating, reloadCarousels) => {
    
        
    const data = {
        websiteurl: websiteUrl,
        ratingoption: ratingOption,
        newrating: newRating
    }

    return fetch(`${process.env.REACT_APP_API}/api/ratings`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(message => {
            console.log('Updated rating')


            moveToRatedNeeded(websiteUrl)
                .then(needed => {
                    if (needed){
                        updateDashboardLocation(websiteUrl, 'top', reloadCarousels)
                    }
                })
        })
        .catch  (err => {console.log('Couldnt update rating'); return err})
}

export const getUserRatingOptions = () => {
    return fetch(`http://localhost:5000/api/user/ratingoptions`)
        .then(response => response.json())
        .then(data=> {return data.data})
        .catch(e=> {console.log(e); return false})

}

export const updateNote = (websiteUrl, note) => {

    return fetch(`http://localhost:5000/api/userproperties/note`, {
        method: "PUT",
        body: JSON.stringify({ note: note, websiteurl: websiteUrl}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(() => {console.log('Note added'); return }) 
        .catch(err => {console.log("Couldn't add the note"); return null });

}