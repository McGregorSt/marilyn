import React from 'react'
 
import classes from './Menu.css'
import MenuItem from './MenuItem/MenuItem'

const Menu = () => {
  return <div className={classes.Menu}>
    <MenuItem />
    <MenuItem />
  </div>
}
 
export default Menu