import React, { useState, useEffect } from 'react'
import { getData, getNoOfPages } from '../functions/adminFunctions'

function Admin() {

    const [data, setData] = useState(['sadf', 'asdf'])
    const [noOfPages, setNoOfPages] = useState([1])
    const [page, setPage] = useState(1)
    const [table, setTable] = useState('users')

    useEffect(() => {
        getData(table, page)
            .then(data => {
                if (data.length){
                    setData(data)
                }else{
                    setPage(1)
                }
            })
        
        getNoOfPages(table)
            .then(setNoOfPages)
    }, [page, table])



    return (
        <div className='admin'>

            <ul className="admin__selection">
                <li 
                    className={`admin__selection__item ${table === 'users' ? 'admin__selection__item-active' : ''}`}
                    onClick={()=> {setPage(1); setTable('users')}}
                    >
                Users</li>     
                <li
         
                    className={`admin__selection__item ${table === 'properties' ? 'admin__selection__item-active' : ''}`}
                    onClick={()=> {setPage(1); setTable('properties')}}
                    >
                Properties</li>     
                <li 
                    className={`admin__selection__item ${table === 'ratingcategories' ? 'admin__selection__item-active' : ''}`}
                    onClick={()=> {setPage(1); setTable('ratingcategories')}}
                    >
                Rating Cateories</li>     
                <li 
                    className={`admin__selection__item ${table === 'ratingoptions' ? 'admin__selection__item-active' : ''}`}
                    onClick={()=> {setPage(1); setTable('ratingoptions')}}
                    >
                Rating Options</li>     
            </ul>

            <div className="overflow">
                <table className="admin__dataTable" cellSpacing="0">

                    <thead>
                        <tr className='admin__dataTable__label'>
                            {
                                Object.keys(data[0]).map((value, i)=>{
                                    return <th className='admin__dataTable__label__item' key={i}>{value}</th>
                                })
                            }
                        </tr>
                    </thead>

                    <tbody>

                        {
                        data.map((object, i)=>{
                            return (
                                <tr className='admin__dataTable__data' key={i}>
                                    {
                                        Object.values(object).map((value, i)=>{
                                            return <td className='admin__dataTable__data__item' key={i}>{value ? value.toString() : '-'}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                        }
                    </tbody>


                </table>
            </div>
            

            <div className="admin__pagination">
                {
                    noOfPages.map((number, i)=>{
                        return (
                            <div 
                                className={`admin__pagination__item ${number === page ? 'admin__pagination__item-active' : ''}`}
                                key={i}
                                onClick={()=>setPage(number)}
                                >
                                {number}</div>
                        )
                        
                    })
                }
            </div>
            
        </div>
    )
}

export default Admin
