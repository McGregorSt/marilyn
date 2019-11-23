import React from 'react'
 
import classes from './Menu.css'
import MenuItem from './MenuItem/MenuItem'

const Menu = () => {
  return <div className={classes.Menu}>
    <MenuItem to='/article' value='article' />
    <MenuItem to='/gallery' value='gallery' />
  </div>
}
 
export default Menu