import React from 'react';
import BootNavBar from 'react-bootstrap/Navbar'

const NavBar = () =>{
    return(
        <BootNavBar className="justify-content-center" bg="dark" variant="dark">
            <BootNavBar.Brand>Calculadora Online</BootNavBar.Brand>
        </BootNavBar>
    )
}

export default NavBar;