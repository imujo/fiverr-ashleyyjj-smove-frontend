import React, { useRef, useEffect, useContext } from 'react'
import { updateDashboardLocation } from '../functions/apiFunctions'
import { ReloadStateContext } from '../state/ReloadState'
import ReactGA from 'react-ga'


const ManageDropdown = ({ open, setismanagedopen, options, websiteurl }) => {

    const dropdown = useRef()

    const { reloadCarouselsGlobal } = useContext(ReloadStateContext);
    const [,reloadCarousels] = reloadCarouselsGlobal;

    const reactGaEvent = (event) => {
        
      ReactGA.event({
          category: 'Property Cards',
          action: `PC_${event}`
      })

  }



    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (open && dropdown.current && !dropdown.current.contains(e.target)) {
            setismanagedopen(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [open, setismanagedopen])

    return (
        <ul className={`manageDropdown dropdown ${open ? 'dropdown-open' : ''}`} ref={dropdown}>
          {
            options.map((option, i)=>{
              console.log(option.ga)
              return <li className="manageDropdown__item" key={i} onClick={()=> {reactGaEvent(option.ga); updateDashboardLocation(websiteurl, option.newLocation, reloadCarousels)}}>{option.title}</li>            

            })
          }
        </ul>
    )
}

export default ManageDropdown
