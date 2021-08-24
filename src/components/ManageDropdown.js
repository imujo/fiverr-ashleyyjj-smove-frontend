import React, { useRef, useEffect } from 'react'

const ManageDropdown = ({ open, setismanagedopen }) => {

    const dropdown = useRef()


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
            <li className="manageDropdown__item">Move to 'think about' list</li>            
            <li className="manageDropdown__item">Move to 'viewing' list</li>            
        </ul>
    )
}

export default ManageDropdown
