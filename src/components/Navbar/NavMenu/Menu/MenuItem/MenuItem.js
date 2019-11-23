import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './MenuItem.css'
 
const MenuItem = ({ to, value }) => {
   return (
    <div className={classes.MenuItem}>
      <NavLink to={ to } value={ value }>
        {value}
      </NavLink>
    </div>
  )}
 
export default MenuItem