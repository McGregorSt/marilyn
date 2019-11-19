import React from 'react'
 
import NavLogo from './NavLogo/NavLogo'
import classes from './NavMenu.css'
import Menu from './Menu/Menu'

const NavMenu = () => {
  return <div className={classes.NavMenu}>
    <NavLogo />
    <Menu />
  </div>
}
 
export default NavMenu