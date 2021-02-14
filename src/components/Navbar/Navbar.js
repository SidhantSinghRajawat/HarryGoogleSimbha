import React,{useEffect, useState} from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Button} from '../../globalStyles'
// import { NavLink } from 'react-router-dom'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.element'

const Navbar = () => {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick =()=> setClick(!click);

    const showButton =()=>{
        if(window.innerWidth <=960){
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize',showButton);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        Radhika❤️
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars /> }
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>My Love❤️</NavLinks>
                        </NavItem>
                    
                        <NavItem>
                            <NavLinks to='/images'>Love❤️</NavLinks>
                        </NavItem>
                    
                        <NavItem>
                            <NavLinks to='/dogs'>Doggo's❤️</NavLinks>
                        </NavItem>


                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar
