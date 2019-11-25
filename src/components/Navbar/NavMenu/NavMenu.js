import React from 'react'

import classes from './NavMenu.css'
import NavLogo from './NavLogo/NavLogo'
import Menu from './Menu/Menu'

const NavMenu = () => {
  return (
    <div className={classes.NavMenu}>
      <NavLogo />
      <Menu />
    </div>
  )
}

export default NavMenu