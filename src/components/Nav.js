import React from 'react'

const Nav = (props) => {
    return (
        <nav className='nav'>
            <h1 className='nav__logo'>smove</h1>

            {props.children}
        </nav>
    )
}

export default Nav
