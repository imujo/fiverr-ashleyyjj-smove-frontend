const api = process.env.REACT_APP_API

export const getData = (table, page) => {
    return fetch(`${api}/admin/${table}/${page}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwtToken')
        }
    })
        .then(res => res.json())
        .then(data => {console.log('Got data'); return data.data})
        .catch(err => {console.log('Couldnt get data'); return null})
}

export const getNoOfPages = (table) => {
    return fetch(`${api}/admin/noofpages/${table}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('jwtToken')
        }
    })
        .then(res => res.json())
        .then(data => {console.log('Got users'); return data.data})
        .catch(err => {console.log('Couldnt get users'); return null})
}
