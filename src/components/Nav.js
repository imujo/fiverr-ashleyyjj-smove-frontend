import React from 'react'

const Nav = (props) => {
    return (
        <nav className='nav'>
            <h1 className='nav__logo'><a href="http://mysmove.com">smove</a></h1>

            {props.children}
        </nav>
    )
}

export default Nav
