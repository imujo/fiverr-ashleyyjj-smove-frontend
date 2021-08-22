import React from 'react'

const ToggleSwitch = ({ checked, setchecked }) => {
    return (
        <div className="toggle-switch" onClick={()=> setchecked(!checked)}>
            <input
                type="checkbox"
                className="toggle-switch-checkbox"
                checked={checked}
            />
            <label className="toggle-switch-label">
            <span className="toggle-switch-inner" />
            <span className="toggle-switch-switch" />
            </label>
        </div>
    )
}

export default ToggleSwitch
