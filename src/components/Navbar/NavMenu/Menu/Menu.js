import React from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
 
import classes from './Menu.css'
import MenuItem from './MenuItem/MenuItem'

const Menu = () => {
  return <div className={classes.Menu}>
    <MenuItem to='/marilyn/' value='faUser' icon={faUser} />
    <MenuItem to='/marilyn/gallery' value='faImage' icon={faImage} />
  </div>
}
 
export default Menu